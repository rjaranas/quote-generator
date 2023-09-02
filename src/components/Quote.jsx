import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import TwitterIcon from '../assets/twitter.svg';
import TumblrIcon from '../assets/tumblr.svg'



const Quote = () => {
  const [quote, setQuote] = useState()
  const [author, setAuthor] = useState()

  useEffect(() => {
    fetchQuote()
  }, [])

  const fetchQuote = () => {
    let url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;
    fetch(url)
      .then(res => res.json())
      .then(data => {
        let dataQuotes = data.quotes;
        let randomNum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuote = dataQuotes[randomNum];

        setQuote(randomQuote.quote);
        setAuthor(randomQuote.author);
      })
  }


  const handleClick = () => {
    fetchQuote()
  }



return (
  <Card style={{ width: '70rem', height: '33rem' }}  className='bg-dark item-center --bs-border-black shadows mx-auto p-2' id='quote-box'>
      <Card.Body>
        <div className='border border-dark rounded bg-secondary p-4'style={{ height: '290px' }} >
          <Card.Title id='author' className='fw-bold'>{author}</Card.Title>
          <h2 className='mt-5' id='text'> 
          &ldquo; {quote} &rdquo; 
          </h2>
          </div>
        <div className='h-auto mt-5'>
          <p className='text-secondary text-start mt-2'> Share to:</p>
          <a id='tweet-quote' href='https://www.twitter.com/intent/tweet' target='_blank'><img src={TumblrIcon} className='float-start ms-2'/></a>
          <a id='tumblr-share' href='https://www.tumblr.com/share' target='_blank'><img src={TwitterIcon} className='float-start ms-5' /></a>
          <button className='float-end btn btn-secondary' onClick={handleClick} id='new-quote'>Random Quote</button>
        </div>
      </Card.Body>
    </Card>
)   
}




export default Quote