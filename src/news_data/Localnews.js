import React, { useEffect, useState } from 'react'
import Card from '../Card';

function Localnews() {

    const [news , setNews] = useState([]);


    useEffect(() => {
      fetch("https://google-news1.p.rapidapi.com/geolocation?geo=Navi%20Mumbai&country=IN&lang=en&limit=50", {
        "method": "GET",
        "headers": {
          "x-rapidapi-host": "google-news1.p.rapidapi.com",
          "x-rapidapi-key": "497a44a3b0mshe3f86684988026bp12f7c5jsna8bfb4cf6d3c"
        }
      })
      .then(response => response.json())
      .then(data => setNews(data.articles))
      .catch(err => {
        console.error(err);
      });

        }, []);

    return (
        <div className="main_body">

              <div className="heading">
                <div className="heading_left">
                  <img src="https://cdn.vox-cdn.com/thumbor/pOMbzDvdEWS8NIeUuhxp23wi_cU=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/19700731/googlemaps.png" height="60px" width="60px" alt="" />
                <h3 className="heading_name">
                  Local News 
                </h3>

                </div>

                <div className="heading_right">

                  <button> <i className="far fa-star"></i> Follow </button>
                  <button> <i className="fas fa-share-alt"> </i> Share</button>
                </div>
               
            </div>

            {
          news.map((data , index) => (
          
            <Card 
            key={index}
            title={data.title} 
            desc =''
            source = {data.source.title}
            content = ''
            publish={data.published_date}
            url = {data.link}
            image ={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEb-pfj0DC0mL9kD2wyZ8WfvwNTGRFVe0OHA&usqp=CAU'}
      
            />

            
          ))
        }

            
        </div>
    )
}

export default Localnews
