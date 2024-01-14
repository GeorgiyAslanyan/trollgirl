import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div id="footer"
    className="flex flex-col gap-3 w-full bg-black text-white items-center justify-center py-10 px-5">
        <div className="flex gap-10">
            <a href="https://twitter.com/TrollGirlCoin" className="scale-100 hover:scale-110 ease-linear duration-100 transition-all" target="_blank" rel="noopener noreferrer">
                <Image src="/twitter_black.svg" width="60" height="60" alt="icon"/>
            </a>
            <a href="https://t.me/TrollGPortal" className="scale-100 hover:scale-110 ease-linear duration-100 transition-all" target="_blank" rel="noopener noreferrer">
                <Image src="/telegram_black.svg" width="60" height="60" alt="icon"/>
            </a>
        </div>
        <p className="text-2xl font-bold">Troll Girl $TrollG  2024 | All rights reserved</p>
    </div>
  )
}

export default Footer