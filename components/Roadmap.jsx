import Image from 'next/image'
import React from 'react'

const roadmapArr = [
    {text1: '– Smart Contract creation', text2: '– Website Creation', text3: '– Community building', text4: '– 500 Telegram members'},
    {text1: '– CMC and CG Listing', text2: '– Etherscan logo and info update', text3: '– 1000 Holders', text4: '– 1000 Telegram members'},
    {text1: '– CEX listing', text2: '– Huge community events', text3: '– 5000 holders', text4: '– 5000 Telegram members'},
    {text1: '– Huge partnerships', text2: '– 20K+ holders', text3: '– 20K+ Telegram members', text4: '– To be continued'},
]

const Roadmap = () => {
  return (
    <div
      id="roadmap"
      className="clip-path-roadmap flex flex-col gap-10 w-full bg-[#161825] text-[#D9D9D9] items-center justify-center px-4 lg:px-24 py-24">
      <div className="flex items-center justify-center">
        <h2 className="text-5xl">Roadmap</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 justify-center">
        {roadmapArr.map((el, index) => <div key={index} className="border-2 border-[#D9D9D9] pt-3 lg:pt-10 pb-4 lg:pb-5 px-3 lg:px-5 flex flex-col gap-5">
            <p className="text-2xl">Phase {index + 1}</p>
            <div className="flex flex-col text-xl gap-2">
                <p>{el.text1}</p>
                <p>{el.text2}</p>
                <p>{el.text3}</p>
                <p>{el.text4}</p>
            </div>
        </div>)}
      </div>
    </div>
  )
}

export default Roadmap