import React from "react";
import { useWeb3Contract, useMoralis } from "react-moralis";
import { abi, contractAddress } from "../constants";

const LotteryEntrance = () => {
  const {chainId: chainIdHex} = useMoralis();
  console.log(parseInt(chainIdHex));
  const {runContractFunction: enterRaffle} = useWeb3Contract({
    abi: abi,
    contractAddress: contractAddress,
    params: {},
    msgValue: ,

  })

  return <div>LotteryEntrance</div>;
};

export default LotteryEntrance;
