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
                    <header> What is it like?</header>
                        <iframe id="mango-video" width="720" height="510" src="https://www.youtube.com/embed/iuPGCi9VEco" frameborder="0" gesture="media" allowfullscreen></iframe> 
                        <div className="video-wrapper">
                            <div className="row">
                                <div className="col">
                                    <iframe id="hackathon-video" width="420" height="250" src="https://www.youtube.com/embed/qj4DQfYx2Hg" frameborder="0" gesture="media" allowfullscreen></iframe>  
                                </div>
                            </div>           
                            <div className="row">
                                <div className="col">
                                    <iframe id="mlh-video" width="420" height="250" src="https://www.youtube.com/embed/fcsugf8I0ms" frameborder="0" gesture="media" allowfullscreen></iframe>  
                            </div>           
                        </div>
                    </div> 
                </div>
            </div>
        )
    }
}

export default WhatLike