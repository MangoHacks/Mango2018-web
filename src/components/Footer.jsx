import React,{ Component } from 'react';

import fontawesome from '../public/css/font-awesome.min.css'

class Footer extends React.Component{
    render(){
        return(
            
          <footer class="footer"> 
              <div className="footer-link">
                <a href="https://www.facebook.com/mangohacks" class="fa fa-facebook fa-2x" aria-hidden="true"></a>
                <a href="https://www.twitter.com/mangohacks" class="fa fa-twitter fa-2x" aria-hidden="true"></a>  
                <a href="https://www.twitter.com/mangohacks" class="fa fa-slack fa-2x" aria-hidden="true"></a>                  
              </div>
             <span class="footer-text">Made with ❤️ by MangoHacks</span>         
        </footer>
    
        )
    }
}

export default Footer