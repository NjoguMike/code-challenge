import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [ botData, setBotData ] = useState([])
  const [ botArmy, setBotArmy ] = useState([])
  const [ toDelete , setDelete ] = useState("")

  const fetchURL = "http://localhost:8002/bots"

  console.log(toDelete)
  useEffect(
    ()=>{
      fetch(fetchURL)
      .then(res => res.json())
      .then(botData => setBotData(botData))
    },
    [] 
  )
  useEffect(
    ()=>{
      fetch("http://localhost:8002/bots/"+toDelete, {
        method: "DELETE",
        headers:{
            "Content-Type":"application/json"
          }
        }
      )
      .then(res => res.json())
      .then(data => console.log(data))
    },
    [toDelete] 
  )

  function selectBot(value){
    const botIdentifier = value.name
    deleteBot(value)
    const selectedBot = botData.find(bot => bot.name === botIdentifier)
    const selectedBots = botArmy.find(bot => bot === selectedBot) ? botArmy : [...botArmy,selectedBot]
    setBotArmy(selectedBots)
  }

  function toRemove(value){
    const unselectedBot = value.id
    deleteBot(value)
    const updateArmy = botArmy.filter(bot => bot.id != unselectedBot)
    setBotArmy(updateArmy)
  
  }
  
  function deleteBot(obj){
    const toDelete = obj.value
    // console.log(toDelete)
    // const newBots = botData.filter(bot => bot.id != toDelete)
    setDelete(toDelete)

  }

  return (
    <div>
      <YourBotArmy bots={botArmy} botValue={toRemove}/>
      <BotCollection bots={botData} botSelector={selectBot}/>
    </div>
  )
}

export default BotsPage;
