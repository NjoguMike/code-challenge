import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [ botData, setBotData ] = useState([])
  const [ botArmy, setBotArmy ] = useState(botData)
  const [ releaseBot, setDelete ] = useState(0)

  console.log(releaseBot)

  const updateBotArmy = () => botData.filter(bot => bot.id !== releaseBot)
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
    const botIdentifier = value

    const selectedBot = botData.find(bot => bot.name === botIdentifier)
    const selectedBots = botArmy.find(bot => bot === selectedBot) ? botArmy : [...botArmy,selectedBot]
    setBotArmy(selectedBots)
   
  }

  function toRemove(value){
    const unselectedBot = value

    const updateArmy = botArmy.filter(bot => bot.name != unselectedBot)
    setBotArmy(updateArmy)
    
  }

  function deleteBot(botDelete){
    const toDelete = botDelete
    
    const filteredBots = botData.filter(bot => bot.id != toDelete)
    setBotArmy(filteredBots)
    setDelete(toDelete)
  }
  
  return (
    <div>
      <YourBotArmy bots={botArmy} botValue={toRemove} relieveDuty={deleteBot}/>
      <BotCollection bots={botData} botSelector={selectBot} relieveDuty={deleteBot}/>
    </div>
  )
}

export default BotsPage;
