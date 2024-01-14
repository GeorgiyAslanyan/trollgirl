import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div id="home" className="flex gap-10 h-screen  w-full bg-black text-white py-5 items-center px-24">
      <div className="flex gap-5 w-1/2 justify-center flex-col font-bold">
        <h1 className="text-6xl font-black">
          My $Troll wants <br/> to be a superstar.
        </h1>
        <h2 className="text-2xl">
          He thinks he can succeed without me, fool! I love you and I want to
          get pumped too 😭
        </h2>
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
