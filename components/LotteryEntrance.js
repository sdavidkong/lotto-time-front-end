import React, { useEffect, useState } from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddress } from "../constants";
import { ethers } from "ethers";
import { useNotification } from "web3uikit";

const LotteryEntrance = () => {
  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const raffleAddress =
    chainId in contractAddress ? contractAddress[chainId][0] : null;

  const [entranceFee, setEntrancefee] = useState("0");
  const dispath = useNotification();

  const { runContractFunction: enterRaffle } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    msgValue: entranceFee,
    params: {},
  });

  const { runContractFunction: getEntranceFee } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "getEntranceFee",
    params: {},
  });

  useEffect(() => {
    if (isWeb3Enabled) {
      async function updateUi() {
        const entranceFeeFromCall = (await getEntranceFee()).toString();
        setEntrancefee(entranceFeeFromCall);
        console.log(entranceFee);
      }
      updateUi();
    }
  }, [isWeb3Enabled]);

  const handleSuccess = async function (tx) {
    await tx.wait(1);
    handleNewNotification(tx);
  };

  const handleNewNotification = function () {};

  return (
    <div>
      Hi lottery entrant!
      {raffleAddress ? (
        <div>
          <button
            onClick={async function () {
              await enterRaffle({
                onSuccess: handleSuccess,
                onError: (error) => console.log(error),
              });
            }}
          >
            Enter Raffle
          </button>
          Entrance fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH
        </div>
      ) : (
        <div>
          Raffle Smart Contract Not Detected on this Network, Please Switch to
          Mainnet or Goerli
        </div>
      )}
    </div>
  );
};

export default LotteryEntrance;
