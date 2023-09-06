import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot , botDetails , releaseBot }) {
// Sinlge BotCard Presentation
//  1. Recieve single Bot info ----- prop
//  2. Pass single Bot info ----- event listener { toBotArmy, toBotSpecs}

  function handleSelect(event){
    event.stopPropagation()
    const itemKey = event.target.id
    botDetails(itemKey)
  }

  function handleClick(event){
    event.stopPropagation()
    const deleteKey = event.target.value
    releaseBot(deleteKey)
  }

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
        onClick={handleSelect}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} id={bot.id}/>
        </div>
        <div className="content" id={bot.id}>
          <div className="header"  id={bot.id}>
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
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
            <div className="ui center aligned segment basic" name={bot.name}>
              <button
                className="ui mini red button"
                id={bot.id}
                name={bot.name}
                value={bot.id}
                onClick={handleClick}
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
