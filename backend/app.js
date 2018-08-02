const express = require('express');

const app = express();

app.use('/api/posts',(req, res, next) => {
  const posts = [
    {
      id: 'fasfasdfavnlk',
      title: 'First server side post',
      content: 'this is coming from the server'
    },
    {
      id:'wekngmakdwo',
      title: 'second server side post',
      content:'this is coming from the server as well'
    }
  ]
  res.status(200).json({
    message: 'posts fetched successfully',
    posts: posts
  });
});


module.exports = app;
