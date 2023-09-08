import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import BotSpecs from "./BotSpecs";

function BotsPage() {
  //start here with your code for step one

  const [ botData, setBotData ] = useState([])
  const [ botArmy, setBotArmy ] = useState([])
  const [ botSpecs, setBotSpecs ] = useState([])
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

    setBotSpecs(selectedBot)
    
  }
  
  function enlistBot(value){
    const botIdentifier = parseInt(value)

    const selectedBot = botData.find(bot => bot.id === botIdentifier)
    const selectedBots = botArmy.find(bot => bot === selectedBot) ? botArmy : [...botArmy,selectedBot]
    const botDataFilter = botData.filter( bot => bot.id !== botIdentifier)
    setBotArmy(selectedBots)
    setBotSpecs(botArmy)
    setBotData(botDataFilter)
  }

  function removeFromArmy(value){
    const unselectedBot = parseInt(value)

    const updateArmy = botArmy.filter(bot => bot.id !== unselectedBot)
    const returnItem = botArmy.find(bot => bot.id === unselectedBot)
    const botDataUpdate = [...botData, returnItem]

    setBotArmy(updateArmy)
    setBotSpecs(botArmy)
    setBotData(botDataUpdate)
  }

  function deleteBot(botDelete){
    const toDelete = parseInt(botDelete)

    setDelete(toDelete)
    setBotArmy(botArmy.filter(bot => bot.id !== toDelete))
  }
  
  function reversePage(){
    setBotSpecs(botArmy)
  }

  const botRender = botData.find(bot => bot.id === botSpecs.id) ? <BotSpecs bot={botSpecs} enlist={enlistBot} backButton={reversePage}/> : <BotCollection bots={botData} botSelector={selectBot} relieveDuty={deleteBot}/>
  
  
  return (
    <div>
      <YourBotArmy bots={botArmy} botValue={removeFromArmy} relieveDuty={deleteBot}/>
      {botRender}
    </div>
  )
}

export default BotsPage;
