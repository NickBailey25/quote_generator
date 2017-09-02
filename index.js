const quotes = require("./quotesLibrary.js")

const printQuote =  function() {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];
  const quoteWithAuthor = quote[0] + " - " + quote[1];
  console.log(quoteWithAuthor);  

}

printQuote()