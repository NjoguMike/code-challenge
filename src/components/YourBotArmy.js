import React, { useState} from "react";
import BotCard from "./BotCard";

function YourBotArmy( { bots , botArmy  }) {
  //your bot army code here...
  /* Container #2
    1. Only Selected Bots are displayed ---- Event Listener, State
    2. Bot persists on Page ---- State has newArray(Army array)
    3. Bot is rendered only Once ---- Conditional Rendering
    4. Bot is still rendered in BotCollection ----- no modification of BotCollection/BotsArray

     */
     const botSelect = bots.find((bot)=> bot.id === botArmy)
  
      console.log(bots)


  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here.. */}
          Your Bot Army
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
