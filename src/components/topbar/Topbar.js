import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@material-ui/icons";
import { NavLink } from "react-router-dom"

export default function Topbar() {
  const loginUser = JSON.parse(localStorage.getItem("loginuser" || '[]'));
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <NavLink className="logo" to="/home">
          <span className="logo">Social</span>
        </NavLink>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <NavLink className="topbarLink" to="/home">
            <span className="topbarLink">Home</span>
          </NavLink>
          <NavLink className="topbarLink" to="/profile">
            <span className="topbarLink">My Profile</span>
          </NavLink>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">2</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <NavLink to="/profile">
          <img src={loginUser.profilePicture} alt="" className="topbarImg" />
        </NavLink>
      </div>
    </div>
  );
}
