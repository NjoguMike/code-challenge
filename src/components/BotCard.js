import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot , botHandler}) {
// Sinlge BotCard Presentation
// For display on Grid
//  1. Recieve single Bot info ----- prop
//  2. Pass single Bot info ----- event listener { toBotArmy, toBotSpecs}

    // const [ selection, setSelection ] = useState([])

        function handleBot(e){
          
          const keyId = e.target.id
            botHandler(keyId)            

          // const selectBots = [...army,botSelect]
          // setSelection(()=>botSelect)
          // setArmy(()=>selectBots)

        }

  return (
    <div className="ui column" >
      <div
        className="ui card"
        key={bot.id}
        onClick={handleBot}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} id={bot.id}/>
        </div>
        <div className="content" id={bot.id}>
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap" id={bot.id}>
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content" id={bot.id}>
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic" id={bot.id}>
              <button
                className="ui mini red button"
                onClick={() => {
                  console.log("add code to connect event listener")}
                }
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
