import { ConnectButton } from "web3uikit";
import React from "react";

const Header = () => {
  return (
    <div>
      <h1>Lotto Time!</h1>
      <ConnectButton moralisAuth={false} />
    </div>
  );
};

export default Header;
