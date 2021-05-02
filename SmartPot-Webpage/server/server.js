const express = require('express');

const app = express();

// Middleware
app.use(express.json());


app.post('/hook', (req, res) => console.log(res));

const port =  8080;

app.listen(port, () => console.log(`Server started on port ${port}`));