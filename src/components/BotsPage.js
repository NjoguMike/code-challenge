import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [ botData, setBotData ] = useState([])
  const [ botArmy, setBotArmy ] = useState([])
  const [ releaseBot, setDelete ] = useState(0)

  const fetchBotData = ()=> {
    fetch("http://localhost:8002/bots")
      .then(res => res.json())
      .then(botData => setBotData(botData))
  }

  const deleteSelectBot = () => {
    fetch("http://localhost:8002/bots/"+releaseBot, {
        method: "DELETE",
        headers: {
          "Content-Type":"application/json"
        }
      })
      .then(res => res.json())
      .then(() => fetchBotData())
  }

  useEffect(
    ()=>fetchBotData(),
    [] 
  )

  useEffect(
    ()=> deleteSelectBot(),
    [releaseBot] 
  )

  function selectBot(value){
    const botIdentifier = parseInt(value)

    const selectedBot = botData.find(bot => bot.id === botIdentifier)
    const selectedBots = botArmy.find(bot => bot === selectedBot) ? botArmy : [...botArmy,selectedBot]

    setBotArmy(selectedBots)
  }

  function removeFromArmy(value){
    const unselectedBot = parseInt(value)

    const updateArmy = botArmy.filter(bot => bot.id !== unselectedBot)
    setBotArmy(updateArmy)
    
  }

  function deleteBot(botDelete){
    const toDelete = parseInt(botDelete)

    setDelete(toDelete)
    setBotArmy(botArmy.filter(bot => bot.id !== toDelete))
  }
  
  return (
    <div>
      <YourBotArmy bots={botArmy} botValue={removeFromArmy} relieveDuty={deleteBot}/>
      <BotCollection bots={botData} botSelector={selectBot} relieveDuty={deleteBot}/>
    </div>
  )
}

export default BotsPage;
