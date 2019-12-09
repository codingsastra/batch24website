import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

import HomePage from './containers/HomePage'
import AboutPage from './containers/AboutPage'
import ServicesPage from './containers/ServicesPage'
import ContactPage from './containers/ContactPage'

function App() {
  return (
   <Router>
     <Switch>
       <Route exact path="/" component={HomePage}/>
       <Route path="/about" component={AboutPage}/>
       <Route path="/services" component={ServicesPage}/>
       <Route path="/contact" component={ContactPage}/>
     </Switch>
   </Router>
  );
}

export default App;
