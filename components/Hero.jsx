import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div
      id="home"
      className="clip-path-right flex flex-col-reverse md:flex-row gap-10 h-auto md:h-screen  w-full bg-[#161825] text-[#D9D9D9] pb-20 md:pb-5 pt-5 items-center px-4 lg:px-24">
      <div className="flex gap-5 w-full md:w-1/2 justify-center flex-col">
        <h1 className="text-4xl md:text-6xl ">
          My $Troll wants <br /> to be a superstar.
        </h1>
        <h2 className="text-xl md:text-2xl">
          He thinks he can succeed without me, fool! <br /> I&apos;m his favorite
          $TrollGirl and I want to get pumped too! 😭
        </h2>
        <a
          className="px-14 w-fit text-xl py-1 border-2 border-[#D9D9D9] bg-[#161825] hover:bg-[#D9D9D9] hover:text-[#161825] ease-linear duration-100 transition-all"
          href="https://app.uniswap.org/swap"
          target="_blank"
          rel="noopener noreferrer">
          Buy
        </a>
      </div>
      <div className="h-full w-full md:w-1/2 flex items-center justify-center">
        <Image
          src="/f1.png"
          alt="img"
          width="400"
          height="487"
          className="h-2/3 -scale-x-100 px-5 pt-10 md:px-0 md:pt-0"
        />
      </div>
    </div>
  );
};

export default Hero;
