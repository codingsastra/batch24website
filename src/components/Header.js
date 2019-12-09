import React, { Component } from 'react';

import {
    Link
} from 'react-router-dom'

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header className="header-6">
                    <div className="container">
                        <div className="row">
                            <div className="navbar col-sm-12" role="navigation">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle"></button>
                                    <a className="brand" href="#"><img height="200" width="180" src="logo.png" alt="Vanes" /></a>
                                    <div className="social-btns">
                                        <a href="#">
                                            <div className="fui-vimeo"></div>
                                            <div className="fui-vimeo"></div>
                                        </a>
                                        <a href="#">
                                            <div className="fui-facebook"></div>
                                            <div className="fui-facebook"></div>
                                        </a>
                                        <a href="#">
                                            <div className="fui-twitter"></div>
                                            <div className="fui-twitter"></div>
                                        </a>
                                    </div>
                                </div>
                                <div className="collapse navbar-collapse">
                                    <ul className="nav">
                                        <li><Link to="/">HOME</Link></li>
                                        <li><Link to="/about">ABOUT</Link></li>
                                        <li><Link to="/services">SERVICES</Link></li>
                                        <li><Link to="/contact">CONTACT</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section className="header-6-sub">
                    <div className="background">&nbsp;</div>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-8 col-sm-offset-2">
                                <h3>You have the Requirement, We have the Experience & Resources</h3>
                                <div className="row">
                                    <p className="lead col-sm-10 col-sm-offset-1">
                                        Vanes can help your business to develop any software solution from small to large with
                                        decades of experience in the industry.
                            </p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-10 col-sm-offset-1">
                                <div className="signup-form">
                                    <form>
                                        <div className="clearfix">
                                            <input type="text" className="form-control" placeholder="Your Name" />
                                            <input type="text" className="form-control" placeholder="Your Phone" />
                                            <input type="text" className="form-control" placeholder="Your E-mail" />
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        )
    }
}

export default Header;