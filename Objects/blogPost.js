//Create an object of blogpost
//title,body,author,views,comments(author,body),isLive

const blogPost = {
    title: 'title1',
    body: 'this is a blogpost',
    author: 'author12',
    views: 100,
    comments: [
        {
            author: 'author23',
            body: 'comment1'
        },
        {
            author: 'author34',
            body: 'comment2'
        },
    ],
    isLive: true
}

console.log(blogPost);