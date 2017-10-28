import React,{ Component } from 'react';

import fontawesome from '../public/css/font-awesome.min.css'

class Footer extends React.Component{
    render(){
        return(
            
          <footer className="footer"> 
              <div className="footer-link">
                <a href="https://www.facebook.com/mangohacks" className="fa fa-facebook fa-2x" aria-hidden="true"></a>
                <a href="https://www.twitter.com/mangohacks" className="fa fa-twitter fa-2x" aria-hidden="true"></a>  
                <a href="https://www.twitter.com/mangohacks" className="fa fa-slack fa-2x" aria-hidden="true"></a>                  
              </div>
             <span className="footer-text">Made with ❤️ by MangoHacks</span>         
        </footer>
    
        )
    }
}

export default Footer