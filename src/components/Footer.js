import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-1 bg-midnight-blue">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <img height="150" width="130" src="logo.png" alt="Vanes" /><br /><br />
                            Vanes headed by a team of experienced, skilled and passionate IT professionals. We have been
                            successful in providing "best-in-className" Services in technology, consulting, staffing and
                            training to business and corporations, worldwide. Our vast experience in handling international
                            business, a mature offshore development process and a well established solution delivery model
                            makes us the best option for our clients to work with.
                        <div className="social-btns">
                                <a href="#" className="social-btn-facebook"
                                    data-text="Startup Design Framework - http://designmodo.com/startup/ Suit Up your Startup!"
                                    data-url="http://designmodo.com/startup/">
                                    <div className="fui-facebook"></div>
                                    <div className="fui-facebook"></div>
                                </a>
                                <a href="#" className="social-btn-twitter"
                                    data-text="Startup Design Framework - http://designmodo.com/startup/ Suit Up your Startup!"
                                    data-url="http://designmodo.com/startup/">
                                    <div className="fui-twitter"></div>
                                    <div className="fui-twitter"></div>
                                </a>
                            </div>
                        </div>
                        <nav>
                            <div className="col-sm-2 col-sm-offset-1">
                                <h6>Links</h6>
                                <ul>
                                    <li><a href="#">About Vanes</a></li>
                                    <li><a href="#">Services</a></li>
                                    <li><a href="#">Careers</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-2">
                                <h6>Follow Us</h6>
                                <ul>
                                    <li><a href="#">Twitter</a></li>
                                    <li><a href="#">Linked In</a></li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="row">
                        <div className="col-sm-5 additional-links">
                            <a href="/terms">Terms of Service</a>
                            <a href="/privacy">Privacy Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;