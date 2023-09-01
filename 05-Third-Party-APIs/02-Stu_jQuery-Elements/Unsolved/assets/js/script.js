// TODO: Select the existing DOM element, <div id="root">, and assign to a new variable
// Hint: Visit the documentation https://api.jquery.com/

var rootEl = $('#root');
// TODO: Create a `<p>` element that will store an author's name and assign that created element to a new variable

//Add the following text to the newly created `<p>` element: "Carol Dweck"
var person = $('<p>');
person.append('Carol Dweck');
person.attr('class', 'plain'); //Add the class `plain` to the author element

rootEl.append(person);

var quotes = $('<h1>');
quotes.text('Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning.')
quotes.attr('class', 'fancy');
rootEl.append(quotes);
// TODO: Create a new `<h1>` element that will store an author's quote and assign it to new variable

// TODO: Add the following quote text to the quote element, "Love Challenges, Be Intrigued by Mistakes, Enjoy Effort, and Keep Learning."

// TODO: Apply the class `fancy` to the quote element

// TODO: Append the author element to the quote element

// TODO: Append the quote element to the HTML element with an ID of `root` in `index.html`
