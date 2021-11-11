import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import { Users } from "../../dummyData";

export default function Feed(wrapPosts) {
  const loginUser = JSON.parse(localStorage.getItem("loginuser" || '[]'));
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share loginUser={loginUser} />
        {
          (wrapPosts) ?
            (Users.map(user => {
              if (user.posts.length > 0 && loginUser.id !== user.id) {
                return user.posts.map((post) => {
                  return <Post user={user} key={post.id} post={post} />
                })
              }
            })) :
            (Users.map(user => {
              if (user.posts.length > 0 && loginUser.id === user.id) {
                return user.posts.map((post) => {
                  return <Post user={user} key={post.id} post={post} />
                })
              }
            }))
        }

      </div>
    </div>
  );
}
