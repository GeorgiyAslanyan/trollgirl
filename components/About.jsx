import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex gap-10 h-screen  w-full bg-white text-black py-5 items-center px-24">
      <div className="h-full w-1/2 flex items-center justify-center">
        <Image
          src="/f2.png"
          alt="img"
          width="400"
          height="487"
          className="h-2/3 -scale-x-100"
        />
      </div>
      <div className="flex gap-5 w-1/2 justify-center flex-col font-bold">
        <p className="text-2xl">
          $Troll is not the good looking guy you think, we have lived together
          for many years, and now he has decided to become the most hyped meme
          of this crypto thing... He went on a binge for joy! I didn&apos;t
          catch him red-handed, but I heard a rumor that he&apos;s in Vegas with
          some hooker playing roulette. You know...screw you, I&apos;ll show you
          who&apos;s the strongest in this game, you&apos;re the first but
          I&apos;m the last to take control!
        </p>
      </div>
    </div>
  );
};

export default About;
