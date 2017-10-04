import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// CSS Styles
import css from './public/css/bootstrap.min.css'
import style from './public/css/style.css'


// Components
import Main from './components/Main';
import Signup from './components/Signup';
import Prospectus from './components/Prospectus';
import AdminDashboard from './components/AdminDashboard';

ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/signup' component={Signup} />
        <Route path='/admindashboard' component={AdminDashboard} />
        <Route path='/prospectus' component={Prospectus} />
        
      </div>
    </BrowserRouter>, document.getElementById('root'));
