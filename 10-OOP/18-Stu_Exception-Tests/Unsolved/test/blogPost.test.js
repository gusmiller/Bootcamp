const BlogPost = require('../blogPost.js');

describe('Validate Operation', () => {

  it('should check the type of parameter passed, throw error if a typeof number is not passed', () => {
    const blog = () => new BlogPost();
    const error = new Error('Author must be at least 2 characters long.');
    expect(blog).toThrowError(error);
  })
})
