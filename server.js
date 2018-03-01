const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send({
        name: 'Edberg',
        likes: ['guiter', 'other stuff']
    });
});

app.get('/about', (req, res) => {
    res.send('About page');
});

app.get('/bad', (req, res) => {
    res.send({
        errorMessage: 'a bad happened'
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});