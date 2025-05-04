import Link from 'next/link';
import React from 'react'
import { FaTicketAlt } from "react-icons/fa";

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
        <div className="text-sm text-gray-600">{matchDetails.venue}</div>
        <div className="flex items-center gap-4 mt-1">
            <div className="text-sm font-medium text-right w-40">{matchDetails.teams.home}</div>
            <span className="text-gray-400 text-lg font-bold">VS</span>
            <div className="text-sm font-medium w-40">{matchDetails.teams.away}</div>
        </div>
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
