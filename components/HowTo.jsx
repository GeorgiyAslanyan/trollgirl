import Image from "next/image";
import React from "react";

const arr = [
  {
    title: "Create a Wallet",
    description:
      "Download metamask or your wallet of choice from the app store or google play store for free. Desktop users, download the google chrome extension by going to metamask.io.",
    img: "/phone.webp",
  },
  {
    title: "Get Some ETH",
    description:
      "Have ETH in your wallet to switch to $TrollGirl. If you don’t have any ETH, you can buy directly on metamask, transfer from another wallet, or buy on another exchange and send it to your wallet.",
    img: "/eth.webp",
  },
  {
    title: "Go to Uniswap",
    description:
      "Connect to Uniswap. Go to app.uniswap.org in google chrome or on the browser inside your Metamask app. Connect your wallet. Paste the $TrollGirl token address into Uniswap, select Troll Girl, and confirm. When Metamask prompts you for a wallet signature, sign.",
    img: "/pony.webp",
  },
  {
    title: "Switch ETH for Troll Girl",
    description:
      "Switch ETH for $TrollGirl. We have ZERO taxes so you don’t need to worry about buying with a specific slippage, although you may need to use slippage during times of market volatility.",
    img: "/f2.png",
  },
];

const HowTo = () => {
  return (
    <div
      id="howto"
      className="flex gap-10 min-h-screen bg-[#D9D9D9] text-[#161825] pt-10 justify-center items-center px-4 lg:px-24 w-full">
      <div className="flex gap-5 max-w-[1250px] w-full justify-center flex-col ">
        <h2 className="text-5xl pb-5 text-center">How to buy</h2>
        {arr.map((el, index) => (
          <div key={index} className="border-2 items-center border-[#161825] p-3 lg:p-10 flex flex-col sm:flex-row gap-10">
            <Image
              src={el.img}
              alt="img"
              width="200"
              height="200"
              className={`${index === 3 ? "-scale-x-100" : ""} w-32 h-32`}
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl">{el.title}</h3>
              <p className="text-xl">{el.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowTo;
