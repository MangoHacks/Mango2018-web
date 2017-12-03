import React from 'react'
import $ from 'jquery'

class WhatLike extends React.Component{
    render(){
        $(document).ready(function() {
            var colors = [ "linear-gradient(233deg, #DCF82C, #B3FDF9)","linear-gradient(233deg, #FBDB71, #F5A623)","linear-gradient(233deg, #FF3030, #F523CD)", ];
            var rand = Math.floor(Math.random() * colors.length);
            $('.color-change').css("background", colors[rand]);
        });      
        return(
            <div className="whatlike">
                <div className="content color-change">
                    <header> What is like?</header>
                    
                    <div onclick="this.nextElementSibling.style.display='block'; this.style.display='none'">
                        <img alt="play" src="../public/img/placeholder.png" style="cursor:pointer" />
                        <iframe id="mango-video" width="1920" height="1080" src="https://www.youtube.com/embed/iuPGCi9VEco" frameborder="0" gesture="media" allowfullscreen="true"></iframe> 
                        </div>
                </div>
            </div>
        )
    }
}

export default WhatLike