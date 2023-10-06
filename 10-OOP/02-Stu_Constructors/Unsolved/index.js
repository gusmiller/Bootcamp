/**
 * Constructor function can be used to create objects containing properties "name", "age", "breed", and the "nap()" function.
 * NOTE: we must use the keword 'this' to refer to the same object
 * This code is from the teachers file
 * @param {*} name - dogs name
 * @param {*} age - dogs age
 * @param {*} breed - dogs bread
 */
function Dog(name, age, breed) {
      this.name = name;
      this.age = age;
      this.breed = breed;
      this.nap = function () {
            console.log('Zzzzzzzzz');
      };
}

// Sets the variable "dog" to a Dog object and initializes with name, age, and breed properties
const dog = new Dog('Rex', 2, 'Bulldog');

// Calling dog's nap method
dog.nap();

/**
 * Create a constructor function called 'BlogPost' that takes in 'authorName', 'title', 'text, and 'createdOn'
 * @param {*} authorName 
 * @param {*} title 
 * @param {*} text 
 * @param {*} createdOn 
 */
function BlogPost(authorName, title, text, createdOn) {
      this.authorName = authorName;
      this.title = title;
      this.text = text;
      this.createdOn = createdOn;
      this.printMetaData = function(){
            console.log(`Created by (${authorName}) on (${createdOn})`);
      }
}

const blog = new BlogPost("Gustavo", "The Readme Bot", "TODO: Include a method called [printMetaData()]",Date());
blog.printMetaData();