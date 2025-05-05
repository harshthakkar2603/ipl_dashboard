import React from 'react'
import moments from '../Assets/matchMoments.json'
import Image from 'next/image';
import Link from 'next/link';

const HomeContainer = () => {
    const tabs = [
        { label: "Fixtures & Results", icon: "📅", active: false, path:'matches'},
        { label: "Points Table", icon: "📊", active: false, path:'points-table' },
        { label: "Overall Stats", icon: "📈", active: false, path:'#' },
        { label: "All Teams", icon: "👥", active: false, path:'#' },
        ];


  return (
    <div className="bg-white text-center p-6">
      <h2 className="text-2xl font-bold mb-4">What Are You Looking For?</h2>
      <div className="flex justify-center gap-6 mb-10">
        {tabs.map((tab, index) => (
          <div  key={index}>  
            <Link
                href={tab.path}
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-red-100 transition"
            >
                <span className="text-xl">{tab.icon}</span>
                <span className="font-semibold">{tab.label}</span>
            </Link>
          </div>
        ))}
      </div>

      <div className="bg-gray-900 text-white p-6 rounded-lg">
        <h3 className="text-2xl font-bold mb-6 text-left">Magic Moments</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-md"
            >
              <img src={moment.image} alt={moment.title} height={300} width={400} />
              <div className="p-4 text-left">
                <h4 className="font-semibold text-lg">{moment.title}</h4>
                <div className="text-sm text-gray-400 mt-2">
                  <p>{moment.date} | 👁 {moment.views} | ⏱ {moment.duration}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HomeContainer
