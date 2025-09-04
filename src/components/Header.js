import { useState } from "react";
import {RES_LOGO_URL} from "../config/constants";
import {Link} from "react-router-dom";

const Header = () => {
    const [btnName, setbtnName] = useState("Login");
    return (
        <div className="header">
            <div className="logo-heading">
                <img
                    className="logo"
                    src={RES_LOGO_URL}
                    alt="logo"  
                />
                <h1 className="main-heading">Tandoori Tales</h1>
            </div>
            <div className = "nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/contact">Contact</Link></li> 
                    <button className="login-button"
                         onClick = {() => {
                            btnName === "Login" ? setbtnName("Logout"): setbtnName("Login");
                            }}
                            >
                            {btnName}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;