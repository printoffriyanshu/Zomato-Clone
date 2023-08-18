import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="max-width header">
      <img
        src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
        alt="zomato-logo"
        className="header-logo"
      />

      <div className="header-right">
        <div className="header-location-search-container">
          <div className="location-wrapper">
            <div className="location-icon-name">
              <i class="fi fi-rr-marker absolute-center location-icon"></i>
              <div>Banglore</div>
            </div>
            <i class="fi fi-rr-caret-down absolute-center"></i>
          </div>
          <div className="location-search-separator"></div>
          <div className="header-search-bar">
            <i class="fi fi-rr-search absolute-center search-icon"></i>
            <input
              placeholder="Search for restaurant. cuisine or a dish"
              className="search-input"
            />
          </div>
        </div>
        <div className="profile-wrapper">
          <img className="header-profile-image"  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnYRN3HIYzbm7mtHj6UJMQzLGS-McEuNf5lA&usqp=CAU" alt="profile"/> 
        </div>
        <span className="header-username">Riyanshu</span>
        <i className="fi fi-rr-caret-down absolute-centre profile-options-icon"></i>
      </div>
    </div>
  );
};

export default Header;
