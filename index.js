const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require("path")

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    console.log('Principal')
    res.sendFile(path.join(__dirname, 'public', 'paginaDePromesas.html'));
});

//ruta1
app.get('/ruta1', (req, res) => {
    console.log('ruta1')
    res.sendFile(path.join(__dirname, 'public', 'ruta1', 'ruta1.html'));    
});


//ruta2
app.get('/ruta2', (req, res) => {
    console.log('ruta2')
    res.sendFile(path.join(__dirname, 'public',  'ruta2', 'ruta2.html'));
});


//ruta3
app.get('/ruta3', (req, res) => {
    console.log('ruta3')
    res.sendFile(path.join(__dirname, 'public',  'ruta3', 'ruta3.html'));
});


app.listen(PORT, () => {
    console.log('Servidor corriendo en http://localhost:3000');
});