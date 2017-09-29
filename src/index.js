import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';


import style from './client/public/css/bootstrap.min.css'



// Components
import Main from './client/components/Main';
import Signup from './client/components/Signup';
import Prospectus from './client/components/Prospectus';
import Dashboard from './client/components/Dashboard';



ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Main} />
        <Route path='/signup' component={Signup}/>
        <Route path='/dashboard' component={Dashboard}/>
        <Route path='/prospectus' component={Prospectus}/>
      </div>
    </BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
