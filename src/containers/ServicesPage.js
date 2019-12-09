import React, {Component} from 'react';
import Header from '../components/Header';
import Services from '../components/Services';
import Footer from '../components/Footer';

class ServicesPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Services/>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default ServicesPage;