import "./profile.css";
import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";

export default function Profile() {
  const loginUser = JSON.parse(localStorage.getItem("loginuser" || '[]'));

  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/3.jpeg"
                alt=""
              />
              <img
                className="profileUserImg"
                src={loginUser.profilePicture}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{loginUser.username}</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed wrapPosts={false} />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}
