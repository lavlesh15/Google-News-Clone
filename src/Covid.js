import React, { useEffect, useState } from 'react';
import Card from './Card';

function Covid() {

    const [news , setNews] = useState([]);


    useEffect(() => {
        fetch("https://coronavirus-smartable.p.rapidapi.com/news/v1/IN/", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "coronavirus-smartable.p.rapidapi.com",
		"x-rapidapi-key": "497a44a3b0mshe3f86684988026bp12f7c5jsna8bfb4cf6d3c"
            }
        })
        .then(response => response.json())
        .then(data =>  setNews(data.news))
        .catch(err => alert('err'));
      

        

    }, []);

    return (
        <div className="main_body">
            
            <div className="heading">
                <div className="heading_left">
                  <img src="https://www.creativefabrica.com/wp-content/uploads/2020/04/18/Flat-design-medical-mask-logo-concept-Graphics-3897207-1.jpg" height="100px" width="100px" alt="" />
                <h3 className="heading_name">
                  COVID-19 
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
            key ={index}
            title={data.title} 
            desc = {data.excerpt}
            source = {data.provider.name}
            content = {data.content}
            publish={data.publishedDateTime}
            url = {data.originalUrl}
            image ={data.images==null ? ('https://images.indianexpress.com/2021/02/coronavirus-kerala-759.jpg') : (data.images[0].url)}
      
            />
        
          ))

        }

        </div>
    )
}

export default Covid
