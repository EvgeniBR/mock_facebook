import React from "react";
import CircleDivWithIcon from "../component/circle-div/CircleDivWithIcon";

const FacebookShortcut = ({color}) => {
  return (
    <div className="facebookShortcut" style={{color:color}}>
      <div>
        <i className="fas fa-flag" style={{color:"orange"}}></i>
        <p>Pages</p>
      </div>
      <div>
        <i className="fas fa-heartbeat" style={{color:"purple"}}></i>
        <p>COVID-19 Information Center</p>
      </div>
      <div>
        <i className="fas fa-user-friends" style={{color:"blue"}}></i>
        <p>Friends</p>
      </div>
      <div>
        <i className="fas fa-users" style={{color:"blue"}}></i>
        <p>Groups</p>
      </div>
      <div>
        <i className="fas fa-bullhorn" style={{color:"white"}}></i>
        <p>Ad Center</p>
      </div>
      <div>
        <i className="fas fa-chart-bar" style={{color:"blue"}}></i>
        <p>Ads Manager</p>
      </div>
      <div>
        <i className="far fa-calendar" style={{color:"red"}}></i>
        <p>Events</p>
      </div>
      <div>
        <i className="fas fa-gamepad" style={{color:"blue"}}></i>
        <p>Games</p>
      </div>
      <div>
        <i className="fas fa-clock" style={{color:"white"}}></i>
        <p>Memories</p>
      </div>
      <div>
        <i className="fas fa-briefcase" style={{color:"orange"}}></i>
        <p>Jobs</p>
      </div>
      <div>
        <i className="fab fa-facebook-messenger" style={{color:"purple"}}></i>
        <p>Messenger</p>
      </div>
      <div>
        <i className="fas fa-cloud-sun" style={{color:"yellow"}}></i>
        <p>Offers</p>
      </div>
      <div>
        <i className="fab fa-youtube" style={{color:"blue"}}></i>
        <p>Videos</p>
      </div>
      <div>
        <i className="fas fa-clipboard-check" style={{color:"purple"}}></i>
        <p>Saved</p>
      </div>
      <div>
        <i className="fas fa-store-alt" style={{color:"blue"}}></i>
        <p>Marketplace</p>
      </div>
      <div>
        <i className="fab fa-facebook-messenger" style={{color:"purple"}}></i>
        <p>Messenger</p>
      </div>
    </div>
  );
};

export default FacebookShortcut;
