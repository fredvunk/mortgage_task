import logo from "../../assets/icons/logo.svg";
import placeholder from "../../assets/icons/placeholder.svg";
import notification from "../../assets/icons/notification-bell.svg";
import search from "../../assets/icons/search-blue.svg";
import triangle from "../../assets/icons/triangle.svg";
import {useState} from "react";

const NavDesktop = () => {
    const [options, setOptions] = useState('US');

    const handleChange = () => {
        setOptions(options);
    }

    return (
        <nav className="nav-desktop">
            <div className="nav-desktop-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="nav-desktop-group">
                <div className="nav-desktop-search">
                    <input type="text" placeholder="Search something" id="search"/>
                    <div className="icon"><img src={search} alt="search"/></div>
                </div>
                <div className="nav-desktop-links">
                    <ul>
                        <li><a href="#places">Places to stay</a></li>
                        <li><a href="#mortgage">Mortgage</a></li>
                        <li><a href="#experience">Experiences</a></li>
                        <li><a href="#about">About us</a></li>
                        <li>
                            <a href="#notifications">
                                <img src={notification} alt="notification"/>
                                <span className="counter">1</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="nav-desktop-border"/>

            <div className="nav-desktop-profile">
                <div className="profile-box">
                    <img src={placeholder} alt="profile"/>
                    <div className="profile-data">
                        <div className="name">Richard Lucas</div>
                        <div className="role">Renter</div>
                    </div>
                </div>
                <div className="lang">
                    <select value={options} onChange={handleChange}>
                        <option value="US">US</option>
                        <option value="ET">ET</option>
                    </select>
                    <img src={triangle} alt="triangle" className="triangle"/>
                </div>
            </div>
        </nav>
    );
};

export default NavDesktop;