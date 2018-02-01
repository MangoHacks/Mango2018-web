import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

// CSS Styles
import css from './public/css/bootstrap.min.css'
import style from './public/css/style.css'
import livestyle from './public/css/livestyle.css'


// Components
import Live from './components/Live';


ReactDOM.render(
    <BrowserRouter>
      <div>
        <Route exact path='/' component={Live} />
      </div>
    </BrowserRouter>, document.getElementById('root'));
