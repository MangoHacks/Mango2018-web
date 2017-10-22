import React, { Component } from 'react';

import prospectus1 from '../public/img/prospectus/Prospectus-Design-1.png'
import prospectus2 from '../public/img/prospectus/Prospectus-Design-2.png'
import prospectus3 from '../public/img/prospectus/Prospectus-Design-3.png'


 class Prospectus extends React.Component {
  render() {
    return (
      <div className="prospectus-page">
        <img className="prospectus" src={prospectus1} alt="prospectus"/>
        <img className="prospectus" src={prospectus2} alt="prospectus"/>
        <img className="prospectus" src={prospectus3} alt="prospectus"/>
      </div>
    );
  }
}

export default Prospectus;