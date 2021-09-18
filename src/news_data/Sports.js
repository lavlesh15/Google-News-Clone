import React, { useEffect, useState } from 'react'
import Card from '../Card';

function Sports() {

    const [news , setNews] = useState([]);
  useEffect(() => {
    {
      fetch('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=d41c8474c2644a9584e021f6fa503d66')
      .then(response => response.json())
      .then(data => setNews(data.articles))  
   }
  }, []);


    return (
        <div className="main_body">

            <div className="heading">
                <div className="heading_left">
                  <img src="https://logowik.com/content/uploads/images/760_ball_vector_file.jpg" height="100px" width="100px" alt="" />
                <h3 className="heading_name">
                  Sports
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
            desc = {data.description}
            source = {data.source.name}
            content = {data.content}
            publish={data.publishedAt}
            url = {data.url}
            image ={data.urlToImage ? (data.urlToImage)  : 'https://www.gstatic.com/images/branding/googlelogo/svg/googlelogo_clr_74x24px.svg'}
      
            />

            
          ))
        }

            
        </div>
    )
}

export default Sports
