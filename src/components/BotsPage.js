import React, { useState, useEffect } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one

  const [ botData, setBotData ] = useState([])
  const [ army, setArmy ] = useState([])

    function setBot(botSoldier){
      setArmy(botSoldier)
    }

  useEffect(
    ()=>{
      fetch("http://localhost:8002/bots")
      .then(res => res.json())
      .then(botData => setBotData(botData))
    },
    [] 
  )

  return (
    <div>
      <YourBotArmy botArmy={army} bots={botData}/>
      <BotCollection bots={botData} setBot={setBot}/>
    </div>
  )
}

export default BotsPage;
