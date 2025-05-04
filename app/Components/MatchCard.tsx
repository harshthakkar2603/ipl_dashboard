import Link from 'next/link';
import React from 'react'
import { FaTicketAlt } from "react-icons/fa";
import teamLogo from '../Assets/tempLogo.png'
import Image from 'next/image';

type MatchCardProps ={
    matchDetails: any;
};


const MatchCard = ({matchDetails}:MatchCardProps) => {

  return (
    <div className="flex items-center justify-between bg-white p-2 border-b border-gray-300">

        {/* Left */}
        <div className="text-center w-32">
            <div className='flex'>
                <span className="border border-orange-500 text-orange-500 text-xs px-2 py-1 rounded-sm inline-block mb-2">
                    Match {matchDetails.match_id%1422118}
                </span>
                <span className='mx-4 text-gray-500 text-sm'></span>
            </div>
            <div className="text-sm font-medium">{matchDetails.date}</div>
            <div className="text-xs text-gray-500 flex items-center justify-center gap-1">
                <span>🕒</span> TBD
            </div>
        </div>

        {/* Center */}
        <div className="flex flex-col items-center gap-1 flex-1 px-6">
        <div className="self-start pl-4 text-sm text-gray-600">{matchDetails.venue}</div>
        <div className="flex items-center gap-4 mt-1">
            <Image src={teamLogo} alt='' className='w-10 h-10 rounded-full'/>
            <div className="text-base font-semibold px-2 text-right w-40">{matchDetails.teams.home}</div>
            <span className="text-gray-400 text-lg font-bold">V/S</span>
            <div className="text-base font-semibold px-2 w-40">{matchDetails.teams.away}</div>
            <Image src={teamLogo} alt='' className='w-10 h-10 rounded-full'/>
        </div>
        {matchDetails.result.win_by_runs!==0 &&<div className='flex text-sm italic items-center gap-1 flex-1'>{matchDetails.result.winner} won the match by {matchDetails.result.win_by_runs} runs</div>}
        {matchDetails.result.win_by_wickets!==0 &&<div className='flex text-sm italic items-center gap-1 flex-1'>{matchDetails.result.winner} won the match by {matchDetails.result.win_by_wickets} wickets</div>}
        </div>

        {/* Right */}
        <div className="flex items-center gap-3">
        <Link href="#" className="bg-gray-200 p-2 rounded-full">
            <FaTicketAlt className="text-gray-600" />
        </Link>
        <button className="bg-red-500 text-white text-center text-sm px-4 py-2 rounded-md hover:bg-red-600" 
            style={{clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0% 100%)", width:'auto'}}>
                Match Centre
        </button>
        </div>
    </div>
  )
}

export default MatchCard
