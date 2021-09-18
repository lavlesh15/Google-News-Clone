import React from 'react';
import "./card.css";

function Card( {title , desc  , source, content , publish,url ,  image}) {
    return (
        <div className="card">

            <div className="card_left">
            <h3 className="card_title">
                {title}
            </h3>
            <div className="publish_details">
            <span className="source"> <small>{source}</small> </span>
            <span className="publish"> <small>{publish}</small> </span>
            </div>

            <div className="card_desc">
                <p className="desc">
                    {desc ? (desc) : (content)}
                </p>
            </div>
            
            <a href={url} target="_blank">Read more <i class="fas fa-angle-down"></i> </a> 
            
            </div>

            <div className="card_right">
            <img src={ image} alt="" height="100px" width="100px"/>
            </div>

            
        </div>
    )
}

export default Card
