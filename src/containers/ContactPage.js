import React, {Component} from 'react';
import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

class ContactPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Contact/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ContactPage;