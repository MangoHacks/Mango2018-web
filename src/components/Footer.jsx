import React,{ Component } from 'react';
import $ from 'jquery'

import fontawesome from '../public/css/font-awesome.min.css'

class Footer extends React.Component{
    render(){
        $(document).ready(function() {
            var colors = [ "linear-gradient(233deg, #DCF82C, #B3FDF9)","linear-gradient(233deg, #FBDB71, #F5A623)","linear-gradient(233deg, #FF3030, #F523CD)", ];
            var rand = Math.floor(Math.random() * colors.length);
            $('.color-change-footer').css("background", colors[rand]);
        });    
        return(
          <footer className="footer color-change-footer"> 
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