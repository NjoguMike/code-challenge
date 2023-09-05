import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [ botData, setBotData ] = useState([])
  const [ botArmy, setBotArmy ] = useState([])

  useEffect(
    ()=>{
      fetch("http://localhost:8002/bots")
      .then(res => res.json())
      .then(botData => setBotData(botData))
    },
    [] 
  )

  function selectBot(value){
    const botIdentifier = value.name

    const selectedBot = botData.find(bot => bot.name === botIdentifier)
    const selectedBots = botArmy.find(bot => bot === selectedBot) ? botArmy : [...botArmy,selectedBot]
    setBotArmy(selectedBots)
  }

  function toRemove(value){
    const unselectedBot = value.id

    const updateArmy = botArmy.filter(bot => bot.id != unselectedBot)
    setBotArmy(updateArmy)
  
  }

  return (
    <div>
      <YourBotArmy bots={botArmy} botValue={toRemove}/>
      <BotCollection bots={botData} botSelector={selectBot}/>
    </div>
  )
}

export default BotsPage;
