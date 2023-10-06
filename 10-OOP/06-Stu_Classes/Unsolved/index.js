// TODO: Create a class constructor named BlogPost that takes in 'authorName', 'title', 'text', and 'createdOn'.
class BlogPost {
      constructor(authorName, title, text, createdOn) {
            this.authorName = authorName;
            this.title = title;
            this.text = text;
            this.createdOn = createdOn;
            this.comments = [];

            this.printMetaData = function () {
                  console.log(`Created by ${this.authorName} on ${this.createdOn}`);
            };

            this.printMetaData = function () {
                  console.log(`Created by ${this.authorName} on ${this.createdOn}`);
            };
      }
}

// TODO: Give Blog Post a method called addComment() that takes in a comment and adds it to the comments array.
BlogPost.prototype.addComent = function (comment) {
      this.comments.push(comment);
};

// TODO: Create a class constructor called Comment that takes in 'authorName', 'text', 'createdOn', and 'reaction'.
class Comment {
      constructor(authorName, text, createdOn, reaction) {
            this.authorName = authorName;
            this.text = text;
            this.createdOn = createdOn;
            this.reaction = reaction;

            this.printMetaData = function () {
                  console.log(`Created by ${this.authorName} on ${this.createdOn} (${this.reaction})`);
            };
      }
}

// TODO: Create a new object using the Comment class constructor.
const comment = new Comment("Gustavo","Something here",Date(),"yay!");

// TODO: Create a new object using the BlogPost class constructor.
const blog = new BlogPost("Gustavo","The inmortality of the mosquito","Something here",Date());

// TODO: Use the addComment() method on your newly created BlogPost to add your newly created Comment to its comments array.
blog.addComent(comment);

// TODO: Print the meta data for both the BlogPost and the Comment to the console.
console.log(blog);
console.log(blog.comments)