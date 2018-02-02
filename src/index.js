import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// CSS Styles
import css from './public/css/bootstrap.min.css'
import style from './public/css/style.css'

// Components
import Volunteer from './components/VolunteerDashboard';
import SignIn from './components/SignIn';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Volunteer} />
      </div>
    </BrowserRouter>, document.getElementById('root'));
