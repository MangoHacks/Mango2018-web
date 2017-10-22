import React from 'react'

import fontawesome from '../public/css/font-awesome.min.css'

import angelo from '../public/img/team/angelo.jpg'
import cesia from '../public/img/team/cesia.jpg'
import david from '../public/img/team/david.jpg'
import ivette from '../public/img/team/ivette.jpg'
import mj from '../public/img/team/mj.jpg'
import sam from '../public/img/team/sam.jpg'




class Team extends React.Component{
    render(){
        return(
            <div className="team">
                <div className="content">
                    <header>Mango Team</header>
                        <div className="row">
                                <div className="col">
                                    <img src={angelo} alt="Angelo Saraceno"/>   
                                    <h4>Angelo Saraceno</h4>
                                    <p>Co-Director</p>                                    
                                </div>
                                <div className="col">
                                    <img src={cesia} alt="Cesia Bulnes"/>
                                    <h4>Cesia Bulnes</h4>
                                    <p>Co-Director</p>
                                    <i className="icon-large icon-search"></i>
                                </div>
                                <div className="col">
                                    <img src={david} alt="David Castaneda"/>
                                    <h4>David Castaneda</h4>
                                    <p>Lead Developer</p>
                                </div>
                         </div>
                         <div className="row">
                                <div className="col">
                                    <img src={mj} alt="MJ Ramos"/>                          
                                    <h4>Maria-Jose Ramos</h4>
                                    <p>Business Analyst</p>
                                </div>
                                <div className="col">
                                    <img src={ivette} alt="Ivette Duran"/>
                                    <h4>Ivette Duran</h4>
                                    <p>Outreach Coordinator</p>
                                </div>
                                <div className="col">
                                    <img src={sam} alt="Samantha Magrans"/>
                                    <h4>Samantha Magrans</h4>
                                    <p>Outreach Coordinator</p>
                                </div>
                         </div> 
                  </div>
            </div>
        
        )
    }
}

export default Team