import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// CSS Styles
import css from './public/css/bootstrap.min.css'
import style from './public/css/style.css'
import livestyle from './public/css/livestyle.css'


// Components
import Main from './components/Main';
import Signup from './components/Signup';
import Prospectus from './components/Prospectus';
import AdminDashboard from './components/AdminDashboard';
import SponsorInfo from './components/SponsorInfo';
import VolunteerDashboard from './components/VolunteerDashboard';
import Live from './components/Live';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/signup' component={Signup} />
        <Route path='/admindashboard' component={AdminDashboard} />
        <Route path='/prospectus' component={Prospectus} />
        <Route path='/sponsors' component={SponsorInfo} />
        <Route path='/volunteers' component={VolunteerDashboard} />
        <Route path='/live' component={Live} />
      </div>
    </BrowserRouter>, document.getElementById('root'));
