import logo from "../../assets/icons/logo.svg";
import media from "../../assets/icons/media.svg";
import google from "../../assets/icons/google.svg";
import apple from "../../assets/icons/apple.svg";

const Footer = () => {
    return (
        <footer>
            <div className="desktop-group">
                <div className="media-group">
                    <header>
                        <img src={logo} alt="logo"/>
                    </header>
                    <div className="media">
                        <img src={media} alt="media"/>
                    </div>
                </div>

                <div className="downloads">
                    <div className="downloads-box">
                        <a href="#google"><img src={google} alt="google"/></a>
                    </div>
                    <div className="downloads-box">
                        <a href="#apple"><img src={apple} alt="apple"/></a>
                    </div>
                </div>
            </div>

            <div className="border"/>
            <div className="footer-links">
                <ul>
                    <li><a href="#releases">Releases</a></li>
                    <li><a href="#privacy">Privacy</a></li>
                    <li><a href="#terms">Terms</a></li>
                    <li><a href="#brokers">Terms for brokers</a></li>
                    <li>Do you have any questions? visit our <a href="#faq">FAQ</a></li>
                    <li>Rommates Tecnologia LTDA - CNPJ 18.805.299/0001-17 - CRECI/SP nº 037469-J</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;