import { useState } from 'react';
import './App.css';
import theQuotes from "./assets/theQuotes.json";
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from "react-icons/fa";

interface Quote{
  quote: string;
  author:string;
}
const getRandomQuote=(): Quote=>{
  return theQuotes[Math.floor(Math.random()*theQuotes.length)];
};
function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const changeQuote=()=>{
    setQuote(getRandomQuote());
  }
  const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${encodeURIComponent(quote.quote)}`;
    window.open(twitterUrl, '_blank');
  };

  return (
    <div className="background">
      <div id="quote-box">
        <div className="quote-content">
          <FaQuoteLeft size="10" style={{marginRight:"5px"}}/>
          <h2 id="text">
            {quote.quote}
          </h2>
          <FaQuoteRight size="10" style={{marginLeft:"5px"}}/>
          <h4 id="author">-{quote.author}</h4>
        </div>
        <div className="buttons">
          <a href="#" onClick={tweetQuote}
          id="tweet-quote" target="_blank" style={{backgroundColor:"#1DA1F2", marginRight:"10px"}}><FaTwitter color="white"/>
          </a>
          <button id="new-quote" onClick={changeQuote}>
            Change Quote
          </button>
        </div>
      </div>
    </div>
  
  );
  
}




export default App;
