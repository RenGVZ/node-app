const  express = require('express');
// const notes = require('./notes.js');
//  start express app
const app = express();
// define the port
const PORT = 3001;
// start the express app
app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));

const notes = [
  {
    title: "Note 1",
    desc: "This is note 1",
  },
  {
    title: "Note 2",
    desc: "This is note 2",
  },
]

//  create get route
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/test', (req, res) => {
  res.json(notes)
})