import "./SideBar.css";

function SideBar(props) {
  const isExpanded = props.isExpanded;

  const mainItems = [
    { icon: "fa-home", label: "Home" },
    { icon: "fa-bolt", label: "Shorts" },
    { icon: "fa-play", label: "Subscriptions" },
  ];

  const youItems = [
    { icon: "fa-user", label: "Your Channel" },
    { icon: "fa-history", label: "History" },
    { icon: "fa-play", label: "Your Videos" },
    { icon: "fa-hourglass", label: "Watch Later" },
  ];

  const exploreItems = [
    { icon: "fa-fire", label: "Trending" },
    { icon: "fa-music", label: "Music" },
    { icon: "fa-envelope", label: "News" },
    { icon: "fa-gamepad", label: "Gaming" },
    { icon: "fa-cart-plus", label: "Shopping" },
    { icon: "fa-graduation-cap", label: "Study" },
    
  ];

  const renderSection = (items, title = null) => (
    <>
      {title && isExpanded && <p className="sectionTitle">{title}</p>}
      {items.map((item, index) => (
        <li key={index}>
          <i className={`fa ${item.icon}`}></i>
          {isExpanded && <span>{item.label}</span>}
        </li>
      ))}
      <hr className="sectionDivider" />
    </>
  );

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}>
      <ul>
        {renderSection(mainItems)}
        {renderSection(youItems, "You")}
        {renderSection(exploreItems, "Explore")}
      </ul>
    </div>
  );
}

export default SideBar;
