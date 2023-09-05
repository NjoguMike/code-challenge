import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({ bots , botSelector }) {

  // Your code here
  //Container #1
  //  1. Display all Bots here
  const botsCollection = bots.map(bot => <BotCard key={bot.id} bot={bot} botDetails={botSelector}/>)

  return (
    <div className="ui four column grid">
      <div className="row">
        {botsCollection}
      </div>
    </div>
  );
}

export default BotCollection;
