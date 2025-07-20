import "./Header.css";

function Header() {

   
  return (
    <div className="headerContainer">
      <ul className="mainUl">
        <li className="firstPart">
          <span></span>
          <h1><i className="fa fa-youtube-play" style={{ color: "red", fontSize: "20px" }}></i>Youtube</h1>
        </li>
        <li className="secondPart">
          <form>
            <input type="text" placeholder="Search" name="Search" ></input>
            <button type="submit:" className="searchButton" >
              <i className="fa fa-search " style={{fontSize:"27.5px", color:"white", padding:"0px" }}></i>
            </button>
            <button><i className="fa fa-microphone" style={{ fontSize: "20px", color: "white" }}></i>

            
            </button>
          </form>
        </li>
        <li className="thirdPart">
          <button>Create</button>
          <button>Bell-icon</button>
          <span>Profile</span>
        </li>
      </ul>
    </div>
  );
}

export default Header;
