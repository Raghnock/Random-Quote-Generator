// Storing all quotes
var quotes = [
  {quote: "quote 01", source: "Jan", citation: "website", year: "1901"},
  {quote: "quote 02", source: "Piet", citation: "book", year: "1902"},
  {quote: "quote 03", source: "Joris", citation: "letter", year: "1903"},
  {quote: "quote 04", source: "Korneel", citation: "television", year: "1904"},
  {quote: "quote 05", source: "Martijn", citation: "radio", year: "1905"}
];

/*
The Fisher-Yates Shuffle is a technique to shuffle the contents of an array and making it random.

Links
https://en.wikipedia.org/wiki/Fisher-Yates_shuffle
https://bost.ocks.org/mike/shuffle
*/

// Fisher-Yates Shuffle
function shuffle(array) {
  var m = array.length, t, i;
  
  // While there remain elements to shuffle
  while (m) {
    
    // Pick a remaining element
    i = Math.floor(Math.random() * m--);
    
    // Swap it with the current element.
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }
}

shuffle(quotes);

// Compose quote
var i = 0;

function html() {
  var html = 
      "<p>" + quotes[i].quote + "</p>" +
      "<p>" + quotes[i].source + quotes[i].citation + quotes[i].year + "</p>";
  return html;
}

// Get quote from array
function getQuote() {
  document.getElementById("quoteBox").innerHTML = html();
  if (i !== quotes.length - 1) {
    i += 1;
  } else {
    i = 0;
    shuffle(quotes);
  }
}

window.onload = getQuote();
document.getElementById('loadQuote').addEventListener("click", getQuote, false);
