document.getElementById('getRuta1').addEventListener('click', () => {
    fetch('http://localhost:3000/api/promesa1')
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultado1').textContent = `${data.mensaje}: ${data.dato}`;
    })
    .catch(error => {
        document.getElementById('resultado1').textContent = 'Error al obtener datos.';
        console.error('Error:', error);
    });
});


// Botón para ir a /ruta2
document.getElementById('nextRoute').addEventListener('click', () => {
  window.location.href = '/ruta2';
});