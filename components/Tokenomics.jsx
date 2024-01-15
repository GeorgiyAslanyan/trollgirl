import Image from "next/image";
import React from "react";

const Tokenomics = () => {
  return (
    <div
      id="tokenomics"
      className="flex gap-10 h-screen bg-[#D9D9D9] text-[#161825] pb-5 items-center px-4 lg:px-24 w-full">
      <div className="flex gap-5 w-full md:w-1/2 justify-center flex-col">
        <h1 className="text-5xl text-center">Tokenomics</h1>
        <h2 className="text-xl md:text-2xl text-center">
          Ticker Name: $TrollG <br />
          Total Supply: 55,000,000,000,000 <br />
          90% circulating / 5% MW / 5% Team <br />
          Tax: 5/5 <br />
          Buy (2 - liquidity, 2 - burning, <br /> 1 - $Troll Deployer Wallet) <br />
          Sell (2 - liquidity, 2 - burning, <br />1 - $Troll Deployer Wallet) <br />
          Max Wallet: 2%
        </h2>
      </div>
      <div className="hidden md:flex h-full w-1/2 items-center justify-center">
        <Image
          src="/f3.png"
          alt="img"
          width="400"
          height="487"
          className="h-2/3 -scale-x-100"
        />
      </div>
    </div>
  );
};

export default Tokenomics;
