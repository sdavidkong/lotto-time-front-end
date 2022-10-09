import { ConnectButton } from "web3uikit";
import React from "react";

const Header = () => {
  return (
    <div className="border-b-2 p-5 flex flex-row">
      <h1 className="py-4 px-4 font-blog text-3xl">Lotto Time!</h1>
      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default Header;
