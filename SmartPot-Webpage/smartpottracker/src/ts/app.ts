import express from 'express';

const app = express();

app.listen(8080,() => console.log('Listening on 3000'));
app.use(express.static('public'))

app.post('/waterlevel',(request,response) => {
    console.log(request)
});