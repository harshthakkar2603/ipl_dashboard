import React from 'react'

type MatchCardProps ={
    matchDetails: any;
};


const MatchCard = ({matchDetails}:MatchCardProps) => {

  return (
    <div style={{border:'1px solid black', padding:'1rem'}}>
        <p>{matchDetails.date}</p><br/>
        <p>{matchDetails.venue}</p><br/>
        <p>{matchDetails.teams.home}</p><br/>
        <p>{matchDetails.teams.away}</p><br/>
        <p>{matchDetails.toss.winner} won the toss and decided to {matchDetails.toss.decision} first</p><br/>
    </div>
  )
}

export default MatchCard
