import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed flex z-50 items-center justify-between gap-5 text-white top-0 w-full bg-black px-10 py-5">
      <div className="flex gap-10 font-bold text-xl">
        <a className="ease-linear duration-100 transition-all hover:-translate-y-1" href="#home">Home</a>
        <a className="ease-linear duration-100 transition-all hover:-translate-y-1" href="#about">About</a>
        <a className="ease-linear duration-100 transition-all hover:-translate-y-1" href="#roadmap">Roadmap</a>
        <a className="ease-linear duration-100 transition-all hover:-translate-y-1" href="#tokenomics">Tokenomics</a>
        <a className="ease-linear duration-100 transition-all hover:-translate-y-1" href="#footer">Contact</a>
      </div>
      <a
        className="px-10 text-xl font-bold py-1 border-2 border-white bg-black hover:bg-white hover:text-black ease-linear duration-100 transition-all"
        href="https://app.uniswap.org/#/swap?outputCurrency="
        target="_blank"
        rel="noopener noreferrer">
        BUY
      </a>
    </div>
  );
};

export default Navbar;
