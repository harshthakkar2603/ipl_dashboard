import React from 'react'
import table from '../Assets/point_table_data.json'
import Image from 'next/image'
import logo from '../Assets/tempLogo.png'

const PointTable = () => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-full bg-white shadow rounded-xl">
        <thead>
          <tr className="bg-gray-100 text-gray-700 text-sm">
            {['POS', 'TEAM', 'P', 'W', 'L', 'NRR', 'PTS', 'RECENT FORM'].map((head) => (
              <th key={head} className="px-4 py-3 text-left">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="text-sm text-gray-800">
          {table.data.map((team, index) => (
            <tr key={team.teamName} className="">
              <td className="px-4 py-2">{index + 1}</td>
              <td className="px-4 py-3 font-semibold flex items-center gap-2">
                <Image src={logo} alt={team.teamName} width={45} height={45} className='px-2'/>
                {team.teamName}
              </td>
              <td className="px-4 py-2">{team.matches_played}</td>
              <td className="px-4 py-2">{team.wins}</td>
              <td className="px-4 py-2">{team.losses}</td>
              <td className="px-4 py-2">{team.nrr}</td>
              <td className="px-4 py-2">{team.points}</td>
              <td className="px-4 py-2 flex space-x-1">
                {team.last_5.map((res, idx) => (
                  <span
                    key={idx}
                    className={`w-5 h-5 flex items-center justify-center rounded-full text-xs text-white ${
                      res === 'W'
                        ? 'bg-green-500'
                        : res === 'L'
                        ? 'bg-red-500'
                        : 'bg-gray-400'
                    }`}
                  >
                    {res}
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default PointTable
