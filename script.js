const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// show new quote
function newQuote(){
    // to pick a random quote from apiQuote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
//   to check if author is blank and replce it with "unknown" 
if (!quote.author){
    author.Text.textCcontent= 'Unknown';

} else{
    authorText.textContent = quote.author;
}
// check quote length to determine styling
if(quote.text.length>100){
    quoteText.classList.add('long-quote');
} 
else {
    quoteText.classList.remove('long-quote');
}
    quoteText.textContent=quote.text;
}

// get quotes from api
async function getQuotes(){
    const apiUrl= 'https://type.fit/api/quotes';
    try {
        const response= await fetch (apiUrl);
        apiQuotes = await response.json();
     newQuote();
    } catch (error) {
        // catch error here or allert
    }
}

// to tweet a quote
function tweetQuote(){
    const twitterUrl =`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl,'_blank');
}

// event listern

newQuoteBtn.addEventListener('click', newQuote);

twitterBtn.addEventListener('click', tweetQuote);

// on load
getQuotes();
