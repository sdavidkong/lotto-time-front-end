import React from "react";
import { useMoralis } from "react-moralis";

const Header = () => {
  const { enableWeb3 } = useMoralis();

  return <div>Hi from Header!</div>;
};

export default Header;
