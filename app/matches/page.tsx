import React from 'react'
import data from '../Components/ipl_matches_2008_clean.json'
import MatchCard from '../Components/MatchCard';

const Matches = () => {
    
  return (
    <div>
        {data.matches.map(match=>(
            <MatchCard key={match.match_id} matchDetails={match}/>
        ))}
        
    </div>
  )
}

export default Matches
