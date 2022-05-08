import {useState} from "react";
import logo from '../../assets/icons/logo.svg';
import mobileProfile from '../../assets/icons/mobile-profile.svg';

const NavMobile = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleToggle = () => {
        setMenuOpen(prevState => !prevState);
    };

    return (
        <div>
            <nav className="nav">
                <div className="nav-menu">
                    <div>
                        <div>
                            <div className="nav-menu--burger" onClick={() => handleToggle()}>
                                <i className="fas fa-regular fa-bars"/>
                            </div>
                            <ul className={`nav-menu__item ${menuOpen ? 'nav-menu__item--open' : ''}`}>
                                <li><a href="#places">Places to stay</a></li>
                                <li><a href="#mortgage">Mortgage</a></li>
                                <li><a href="#experience">Experiences</a></li>
                                <li><a href="#about">About us</a></li>
                                <li><a href="#notifications">Icon</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="nav-logo">
                    <img src={logo} alt="logo"/>
                </div>

                <div className="nav-profile">
                    <img src={mobileProfile} alt="profile"/>
                </div>
            </nav>
        </div>
    );
};

export default NavMobile;