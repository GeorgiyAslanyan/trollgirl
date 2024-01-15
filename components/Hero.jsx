import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="clip-path-right flex gap-10 h-screen  w-full bg-[#161825] text-[#D9D9D9] py-5 items-center px-24">
      <div className="flex gap-5 w-1/2 justify-center flex-col ">
        <h1 className="text-6xl ">
          My $Troll wants <br /> to be a superstar.
        </h1>
        <h2 className="text-2xl">
          He thinks he can succeed without me, fool! <br /> I&apos;m his favorite
          $TrollGirl and I want to get pumped too! 😭
        </h2>
        <a
          className="px-14 w-fit text-xl py-1 border-2 border-[#D9D9D9] bg-[#161825] hover:bg-[#D9D9D9] hover:text-[#161825] ease-linear duration-100 transition-all"
          href="https://app.uniswap.org/#/swap?outputCurrency="
          target="_blank"
          rel="noopener noreferrer">
          Buy
        </a>
      </div>
      <div className="h-full w-1/2 flex items-center justify-center">
        <Image
          src="/f1.png"
          alt="img"
          width="400"
          height="487"
          className="h-2/3 -scale-x-100"
        />
      </div>
    </div>
  );
};

export default Hero;
