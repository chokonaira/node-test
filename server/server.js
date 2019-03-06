const express = require('express');

const app =express();


app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Todo App v1.0'
  });
});

app.get('/user', (req, res)=>{
  res.status(200).send([
    {
      name: 'Chuka',
      age: 29
    },
    {
      name: 'Chinweoke',
      age: 29
    },
    {
      name: 'Kingsley',
      age: 29
    }
  ]);
});

app.listen(3000, ()=>{
  console.log('server is running on port 3000');
});

module.exports.app = app;