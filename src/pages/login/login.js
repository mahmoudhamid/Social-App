import "./login.css";
import { useState, useEffect } from "react";
import { Users } from "../../dummyData";
import { NavLink } from "react-router-dom"

export default function Login() {
    const [loginUser, setLoginUser] = useState({
        id: 1,
        profilePicture: "",
        username: "",
        email: "",
        password: "",
        posts: []
    });
    let wrap;
    useEffect(() => {
        wrap = false;
    }, [])

    const handleEmail = (e) => {
        setLoginUser({ ...loginUser, email: e.target.value });
    }

    const handlePassword = (e) => {
        setLoginUser({ ...loginUser, password: e.target.value });
    }

    const handleSubmit = () => {
        Users.forEach(user => {
            if (loginUser.email === user.email) {
                wrap = true;
                setLoginUser(user);
                localStorage.setItem("loginuser", JSON.stringify(user));
            }
        })
    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input onChange={handleEmail} value={loginUser.email} placeholder="Email" className="loginInput" />
                        <input type="password" value={loginUser.password} onChange={handlePassword} placeholder="Password" className="loginInput" />

                        <NavLink onClick={handleSubmit} to="/home">
                            <button className="loginButton">Log In</button>
                        </NavLink>

                        <span className="loginForgot">Forgot Password?</span>
                        <NavLink to="/register">
                            <button className="loginRegisterButton">
                                Create New Account
                            </button>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}



