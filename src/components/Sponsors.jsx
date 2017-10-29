import React from 'react'

import github from '../public/img/sponsors/github.png'
import scis from '../public/img/sponsors/scis.png'
import honors from '../public/img/sponsors/honors.png'
import startup from '../public/img/sponsors/startup.png'
import ultimate from '../public/img/sponsors/ultimate.png'
import fifteenseventeen from '../public/img/sponsors/1517.png'
import mlh from '../public/img/sponsors/mlh.png'


class Sponsors extends React.Component{
    render(){
        return(
 <div className="sponsors">
 <div className="content">
     <header>MangoHacks is supported by...</header>
        <div className="row">
                        <div className="col">
                           <a href="https://www.ultimatesoftware.com/" title="Ultimate Software" target="_blank"> <img src={ultimate} alt="Ultimate Software"/></a>
                        </div> 
                        <div className="col">
                           <a href="https://www.mlh.io/" title="Major League Hacking" target="_blank"> <img src={mlh} alt="Major League Hacking"/></a>
                        </div> 
                        <div className="col">
                            <a href="http://www.1517fund.com/" title="1517" target="_blank"><img src={fifteenseventeen} alt="1517 Fund"/></a>
                        </div> 
                        <div className="col">
                            <a href="http://www.github.com/" title="GitHub" target="_blank"><img src={github} alt="GitHub"/></a>
                        </div> 
         </div>

         <div className="row">
                        <div className="col">
                            <a href="http://www.cis.fiu.edu" title="FIU SCIS" target="_blank"> <img src={scis} alt="FIU SCIS"/></a>
                        </div>
                        <div className="col">
                            <a href="https://honors.fiu.edu/" title="FIU Honors College" target="_blank"><img src={honors} alt="FIU Honors College"/></a>
                        </div>
                        <div className="col">
                            <a href="http://startup.fiu.edu/" title="Startup FIU" target="_blank"><img src={startup} alt="Startup FIU"/></a>
                        </div>
          </div>
   </div>
</div>

        )
    }
}

export default Sponsors;


