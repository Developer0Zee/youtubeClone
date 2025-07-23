import "./Header.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <>
    <header className="header">
      <div className="headerContainer">
        <ul className="mainUl">
          {/* Left Section */}
          <li className="firstPart">
            <button className="navBar" onClick={props.toggleSideBar}>
              <i className="fa fa-bars"></i>
            </button>
            <h1 className="youtubeBrand">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="YouTube Logo"
                className="youtubeLogo"
              />
            </h1>
          </li>

          {/* Middle/Search Section */}
          <li className="secondPart">
            <form className={`searchForm ${isFocused ? "focused" : ""}`}>
              {isFocused && (
                <span className="leftSearchIcon">
                  <i className="fa fa-search"></i>
                </span>
              )}
              <input
                type="text"
                placeholder="Search"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
              </button>
              <button className="micButton">
                <i className="fa fa-microphone"></i>
              </button>
            </form>
          </li>

          {/* Right/User Section */}
          <li className="thirdPart">
            <button className="create">
              <span className="plus">+</span> Create
            </button>
            <button className="bell">
              <i className="fa fa-bell"></i>
            </button>
            <button className="profile">
              <i className="fa fa-user"></i>
            </button>
          </li>
        </ul>
      </div>
</header>
    </>
    
  );
}

export default Header;
