import express from 'express';
console.log("hello")
const app = express();

app.listen(8080,() => console.log('Listening on 3000'));
app.use(express.static('public'))

app.post('/hook',(request,response) => {
    console.log(request)
    response.sendStatus(200).end()
});