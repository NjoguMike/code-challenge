import React from "react";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot , botDetails }) {
// Sinlge BotCard Presentation
// For display on Grid
//  1. Recieve single Bot info ----- prop
//  2. Pass single Bot info ----- event listener { toBotArmy, toBotSpecs}


  return (
    <div className="ui column" >
      <div
        className="ui card"
        key={bot.id}
        onClick={(e)=> botDetails(e.target)}>
        <div className="image">
          <img alt="oh no!" src={bot.avatar_url} name={bot.name} id={bot.id}/>
        </div>
        <div className="content" name={bot.name} id={bot.id}>
          <div className="header">
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
                onClick={(e)=> botDetails(e.target)}
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
