import React, {Component} from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class HomePage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <About/>
                <Services/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default HomePage;