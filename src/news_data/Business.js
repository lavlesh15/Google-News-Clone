import React, { useEffect, useState } from 'react'
import Card from '../Card';

function Business() {

    const [news , setNews] = useState([]);
  useEffect(() => {
    {
      fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=d41c8474c2644a9584e021f6fa503d66')
      .then(response => response.json())
      .then(data => setNews(data.articles))  
   }
  }, []);

    return (
        <div className="main_body">

              <div className="heading">
                <div className="heading_left">
                  <img src="https://cdn2.vectorstock.com/i/thumb-large/67/56/care-stock-market-business-logo-icon-design-vector-22926756.jpg"  height="60px" width="60px" alt="" />
                <h3 className="heading_name">
                  Business 
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

export default Business
