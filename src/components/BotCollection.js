import React from "react";
import BotCard from "./BotCard";
import BotSpecs from "./BotSpecs";

function BotCollection({ bots , setBot }) {
  // Your code here
  //Container #1
  //  1. Display all Bots here
  
  const botCollection = bots.map( bot => <BotCard key={bot.id} bot={bot} botHandler={setBot}/>)

  return (
    <div className="ui four column grid">
      <div className="row">
        {/* Collection of all bots */}

        {botCollection}
      </div>
    </div>
  );
}

export default BotCollection;
