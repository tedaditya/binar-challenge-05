import {Facebook, Instagram, Logo, Mail, Twitch, Twitter} from "../../assets/media";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/styles.css'
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";

const MasterLayout = (props) => {
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-sm navbar-light fixed-top">
                    <Link to={`/`}><img className="d-inline-block align-top img-fluid" src={Logo} alt=""/></Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link font-black font-14">Our Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-black font-14">Why Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-black font-14">Testimonial</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-black font-14">FAQ</a>
                            </li>
                            <li className="nav-item">
                                <button type="button"
                                        className="nav-link btn btn-register font-white p-20 font-14 fw-bold">
                                    Register
                                </button>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
            {props.content}
            <footer className="section-padding section-padding-lr">
                <div className="">
                    <div className="row gx-5 h-100 justify-content-center">
                        <div className="col-xs-7 col-md-3">
                            <p className="font-14 pt-5">Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000</p>
                            <p className="font-14">binarcarrental@gmail.com</p>
                            <p className="font-14">081-233-334-808</p>
                        </div>
                        <div className="col-xs-5 col-md-3">
                            <p className="font-14 pt-5">Our services</p>
                            <p className="font-14">Why Us</p>
                            <p className="font-14">Testimonial</p>
                            <p className="font-14">FAQ</p>
                        </div>
                        <div className="col-xs-7 col-md-3">
                            <p className="font-14 pt-5">Connect with us</p>
                            <img style={{marginRight: 5}} src={Facebook} alt="facebook"/>
                            <img style={{marginRight: 5}} src={Instagram} alt="instagran"/>
                            <img style={{marginRight: 5}} src={Twitter} alt="twitter"/>
                            <img style={{marginRight: 5}} src={Mail} alt="mail"/>
                            <img style={{marginRight: 5}} src={Twitch} alt="twitch"/>
                        </div>
                        <div className="col-xs-5 col-md-3">
                            <p className="font-14 pt-5">Copyright Binar 2022</p>
                            <img src={Logo} className="d-inline-block align-top" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="section-padding"/>
            </footer>
        </>
    )
}

export default MasterLayout