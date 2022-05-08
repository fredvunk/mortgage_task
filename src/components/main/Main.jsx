import NavMobile from "../nav/NavMobile";
import Footer from "../footer/Footer";
import {useState} from "react";

import payments from '../../assets/icons/arrow-down-blue.svg';
import timeline from '../../assets/icons/pc-white.svg';
import service from '../../assets/icons/class.svg';
import search from '../../assets/icons/search.svg';
import {useMediaQuery} from "react-responsive";
import {DeviceSize} from "../../constants/constants";
import NavDesktop from "../nav/NavDesktop";

const Main = () => {
    const isMobile = useMediaQuery({maxWidth: DeviceSize.mobile});
    const [options, setOptions] = useState([]);
    const MAX_YEARS = 30;
    const DEFAULT_VALUE = 150.155;

    const getOptions = () => {
        setOptions(Array(MAX_YEARS).fill().map((_, i) => i + 1));
    };

    return (
        <div>
            {isMobile ? (
                <NavMobile/>
            ) : (
                <NavDesktop/>
            )}
            <main>
                <section className="hero">
                    <div className="hero-background">
                        <div className="hero-container">
                            <div className="hero-title">See how Roommates Home Loans can help</div>
                            <div className="hero-link">Mortgage calculator</div>
                            <div className="calculator">
                                <div className="calculator-container">
                                    <div className="calculator-heading">Take the easy first step toward a mortgage</div>

                                    <div className="input-box">
                                        <label>Property value</label>
                                        <input className="value" type="text" placeholder="R$"/>
                                    </div>

                                    <div className="input-box--term">
                                        <label>Term</label>
                                        <select onClick={() => getOptions()}>
                                            {options.map((val, index) =>
                                                <option key={index} value={val}>{val} years</option>
                                            )}
                                        </select>
                                    </div>

                                    <div className="input-box payment">
                                        <label>Down payment: <span className="prefix">R$</span><span
                                            className="down-payment-value">{DEFAULT_VALUE}</span></label>
                                        <input className="payment" type="range" min="0" max="100" step="10"/>
                                        <div className="payment-value">
                                            <div className="min-value">10%</div>
                                            <div className="max-value">90%</div>
                                        </div>
                                    </div>

                                    <div className="input-box-finance">
                                        <div className="financing">
                                            <label htmlFor="financeValue">Financing</label>
                                            <span>R$</span>
                                            <input type="number" id="financeValue" defaultValue={DEFAULT_VALUE}/>
                                        </div>
                                    </div>

                                    <div className="input-box cpf">
                                        <label>CPF</label>
                                        <input className="cpf" type="number" id="cpf" placeholder="XXX.XXX.XXX-XX"/>
                                    </div>

                                    <button onClick={() => void[0]} className="consultation">Funding consultation</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <div className="filler"/>
                <header className="heading">Benefits</header>
                <section className="benefits">
                    <article>
                        <div className="article-data-container">
                            <div className="img-box">
                                <img src={payments} alt={payments}/>
                            </div>
                            <header>Low down payments</header>
                            <p>We offer a variety of loan options to meet your unique needs.</p>
                        </div>

                    </article>

                    <article>
                        <div className="article-data-container">
                            <div className="img-box">
                                <img src={timeline} alt={timeline}/>
                            </div>
                            <header>Works with your timeline</header>
                            <p>Count on us to respond ASAP and always meet deadlines.</p>
                        </div>

                    </article>

                    <article>
                        <div className="article-data-container">
                            <div className="img-box">
                                <img src={service} alt={service}/>
                            </div>
                            <header>Best-in-class-service</header>
                            <p>Clear communication, friendly staff, and local market expertise.</p>
                        </div>

                    </article>

                    <article>
                        <div className="article-data-container">
                            <div className="img-box">
                                <img src={search} alt={search}/>
                            </div>
                            <header>Total transparency</header>
                            <p>We'll always keep you and your agent informed and up-to-date.</p>
                        </div>
                    </article>
                </section>
            </main>
            <Footer/>
        </div>
    );
};

export default Main;