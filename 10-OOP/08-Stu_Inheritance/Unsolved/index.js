// TODO: Create a class constructor named ForumItem that takes in 'authorName', 'text', and 'createdOn'.
class ForumItem {
  constructor(authorName, text, createdOn) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
  }
}

// TODO: Setup BlogPost and Comment so they inherit their structure from ForumItem.
class BlogPost {
  constructor(authorName, title, text, createdOn) {
    ForumItem.call(this,authorName,text,createdOn);
    this.authorName = authorName;
    this.title = title;
    this.text = text;
    this.createdOn = createdOn;
    this.comments = [];
  }

  addComment(comment) {
    this.comments.push(comment);
  }
}

class Comment {
  constructor(authorName, text, createdOn, reaction) {
    this.authorName = authorName;
    this.text = text;
    this.createdOn = createdOn;
    this.reaction = reaction;
  }
}

// TODO: Create a new object using the Comment class constructor.
const comment = new Comment("Gustavo","Something here",Date(),"yay!");

// TODO: Create a new object using the BlogPost class constructor.
const blogpost = new BlogPost("Gustavo","sdsds asdfsdaf asdf asdfasdf asd","Something here",Date(),"yay!");

// TODO: Log both newly created BlogPost and Comment to the console.
console.log(comment);
console.log(blogpost);