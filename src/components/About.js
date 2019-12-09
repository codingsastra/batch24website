import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <section className="content-25 bg-clouds">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <h3>Welcome to Vanes</h3>

                            <p>
                                Welcome to Vanes Industries. Vanes Industries provides custom software development and
                                consulting services. With our strong technical expertise, we stand in a unique position in
                                providing the best IT solutions.
                        </p>

                            <p>
                                We offer custom software development and maintenance services in wide range of technologies
                                including Web Development, Mobile App Development, Block chain, Python, Big Data, Data
                                Science, Machine Learning etc.
                        </p>
                            <p>
                                We offer technical consulting services in core and emerging technologies. Whether migration
                                of legacy systems or help with emerging technologies, let us know your needs, we have
                                solution for you.
                        </p>

                        </div>
                        <div className="col-sm-6">
                            <img className="pull-right nosvg" src="startup/common-files/icons/rocket-big@2x.png" alt=""
                                width="402" height="401" />
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;