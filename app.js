
window.onload = init;
function init () {
    console.log("JS Loaded");
}

const quotesObj = [
    {
        author: "Mark Twain", 
        quote: "The secret of getting ahead is getting started"
    }, 
    {
        author: "Tony Robbins",
        quote: "The only impossible journey is the one you never begin"
    }, 
    {
        author: "Walt Disney",
        quote: "The best way to get started is to quit talking and begin doing"
    }, 
    {
        author: "Jim Rohn",
        quote: "When you know what you want, and want it bad enough, you’ll find a way to get it"
    }, 
    {
        author: "Henry David Thoreau",
        quote: "Go confidently in the direction of your dreams. Live the life you have imagined"
    }, 
    {
        author: "Steven Maraboli",
        quote: "Take action. An inch of movement will bring you closer to your goals than a mile of intention"
    }, 
    {
        author: "Johann Wolfgang von Goethe",
        quote: "Knowing is not enough; we must apply. Wishing is not enough; we must do"
    },
    {
        author: "Zig Ziglar",
        quote: "You don’t have to be great to start, but you have to start to be great"
    },
]

function generateQuote(){

    let randomQuote = Math.floor(Math.random() * quotesObj.length);
    console.log(randomQuote)

    console.log("quote generated");
    document.getElementById("text").innerText = quotesObj[randomQuote].quote
    document.getElementById("author").innerText = quotesObj[randomQuote].author

    let twitterLink = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";
    twitterLink += quotesObj[randomQuote].quote + " - "+ quotesObj[randomQuote].author

    document.getElementById("tweet-quote").href = twitterLink;
}
init();