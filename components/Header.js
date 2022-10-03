import React from "react";
import { useMoralis } from "react-moralis";

const Header = () => {
  const { enableWeb3 } = useMoralis();

  return (
    <div>
      <button>Connect</button>
    </div>
  );
};

export default Header;
