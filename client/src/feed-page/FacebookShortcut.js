import React from "react";

const FacebookShortcut = ({color}) => {

  return (
    <div className="facebookShortcut" style={{color:color}}>
      <div>
        <i className="fas fa-flag flag"></i>
        <p>Pages</p>
      </div>
      <div>
        <i className="fas fa-heartbeat covid"></i>
        <p>COVID-19 Information Center</p>
      </div>
      <div>
        <i className="fas fa-user-friends friends"></i>
        <p>Friends</p>
      </div>
      <div>
        <i className="fas fa-users group"></i>
        <p>Groups</p>
      </div>
      <div>
        <i className="fas fa-bullhorn adCenter" style={{color:"white"}}></i>
        <p>Ad Center</p>
      </div>
      <div>
        <i className="fas fa-chart-bar manager" style={{color:"blue"}}></i>
        <p>Ads Manager</p>
      </div>
      <div>
        <i className="far fa-calendar events" style={{color:"red"}}></i>
        <p>Events</p>
      </div>
      <div>
        <i className="fas fa-gamepad games" style={{color:"blue"}}></i>
        <p>Games</p>
      </div>
      <div>
        <i className="fas fa-clock memories" style={{color:"white"}}></i>
        <p>Memories</p>
      </div>
      <div>
        <i className="fas fa-briefcase jobs" style={{color:"orange"}}></i>
        <p>Jobs</p>
      </div>
      <div>
        <i className="fab fa-facebook-messenger messenger" style={{color:"purple"}}></i>
        <p>Messenger</p>
      </div>
      <div>
        <i className="fas fa-cloud-sun Weather" style={{color:"yellow"}}></i>
        <p>Weather</p>
      </div>
      <div>
        <i className="fab fa-youtube video" style={{color:"blue"}}></i>
        <p>Videos</p>
      </div>
      <div>
        <i className="fas fa-clipboard-check saved" style={{color:"purple"}}></i>
        <p>Saved</p>
      </div>
      <div>
        <i className="fas fa-store-alt marketplace" style={{color:"blue"}}></i>
        <p>Marketplace</p>
      </div>
      <div>
        <i className="fab fa-facebook-messenger messenger" style={{color:"purple"}}></i>
        <p>Messenger</p>
      </div>
    </div>
  );
};

export default FacebookShortcut;
