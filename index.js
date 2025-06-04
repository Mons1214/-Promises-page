const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('Este es el servidor')
    res.send('Inicio');
});

app.get('/page-two', (req, res) => {
    console.log('Primer TE AMO')
    res.send('Primera Ruta')
});

app.get('/page-three', (req, res) => {
    console.log('segundo TE AMO REYSOTE')
    res.send('Segunda Ruta')
});


app.get('/page-four', (req,res) => {
    console.log('Tercer TE AMO, ¡GRACIAS!')
    res.send('Tercer Ruta')
});

app.listen(3000,() => { 
    console.log('Servidor corriendo en http://localhost:3000');
});