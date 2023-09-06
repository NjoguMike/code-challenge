import React from "react";
import BotCard from "./BotCard";

function YourBotArmy( { bots , botValue, relieveDuty} ) {

  //your bot army code here...

  /* Container #2
    1. Only Selected Bots are displayed ---- Event Listener, store in State
    2. Bot persists on Page ---- State has newArray(Army array)
    3. Bot is rendered only Once ---- Conditional Rendering
    4. Bot is still rendered in BotCollection ----- no modification of BotCollection/BotsArray

     */
 
  const botsCollection = bots.map(bot => <BotCard key={bot.id} bot={bot} botDetails={botValue} releaseBot={relieveDuty}/>)

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {botsCollection}
          
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
