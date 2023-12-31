import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots , botSelector, relieveDuty }) {

  // Your code here
  //Container #1
  //  1. Display all Bots here
  // 2. onSelect Send Bot to Army

  const botsCollection = bots.map(bot => <BotCard key={bot.id} bot={bot} botDetails={botSelector} releaseBot={relieveDuty}/>)

  return (
    <div className="ui four column grid">
      <div className="row">
        {botsCollection}
      </div>
    </div>
  );
}

export default BotCollection;
