import React, {Component} from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

class AboutPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <About/>
               <Footer/>
            </React.Fragment>
        )
    }
}

export default AboutPage;