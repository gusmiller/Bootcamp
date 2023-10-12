// Import readFile and writeFile from the fs/promises module. The fs/promises module exports methods that return
// promises for common file system tasks.
const { readFile, writeFile } = require('fs/promises');
const BlogPost = require('./lib/blogPost');

// TODO: First, call readFile to asynchronously read the data from data/post.json.
readFile('./data/post.json', 'utf-8')
  .then((json) => {
    console.log('Received data from post.json');
    // TODO: parse the json string and assign the resulting object to a variable

    let obj = JSON.parse(json);
    console.log(obj);

    let o = new BlogPost(obj.title, obj.text, obj.author, obj.createdOn)

    let htmlstring = o.render();
    console.log(htmlstring);

    writeFile('index.html', htmlstring, (err) =>
      err ? console.error(err) : console.log('Success!')
    );

  });

// TODO: print a message in the console only after the html file is written.
console.log('yay!')