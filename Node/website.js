import express from 'express';
const app = express();
port = 3000;
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})



server.listen(port, () => {
    console.log(`server is running on ${port}`);
});