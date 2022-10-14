import React from 'react';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../res/home.css"
import {Card} from "react-bootstrap";
import Navbar from '../components/Navbar';

function Home (){

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("/articles")
      .then((r) => r.json())
      .then(setArticles);
  }, []);


  return (
    <div className='home'>

      <Navbar/>

      <div className='text'>

        <h1>Welcome Reader!</h1>

        {/* <p className='welcome-text'>We have a huge collection of short stories by many a famous writers from home and across the globe.
          Few handpicked stories from various categories are listed below for quick reference. 
          We also provided link to editor’s pick stories in each category. 
          Additionally under Kids and Children category we have good moral lesson and bedtime stories for our little readers. 
          We hope that you have pleasant time at our platform. Your comments matter to us and our writers. 
          Don't forget to add your invaluable feedback.</p> */}

     </div>

     <div className='featured'>

      <h3> <i>Featured Stories</i> </h3>

      <main className='grid'>
        
      {articles.map((article) => {

        return (

          <Card style={{ width: '18rem' }} className="box">
          <Card.Img variant="top" src={article.cover_image} />
          <Card.Body>
            <Card.Title className='title'><Link to={`/articles/${article.id}`}>{article.title}</Link></Card.Title>
             <small>
              <h6>Genre:{article.genre}</h6>
              {article.created_at}
             </small>
            <Card.Text>
            {article.content}
            </Card.Text>
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>

        );
      })}

    </main>

     </div>

    </div>
  
  )
}

export default Home;