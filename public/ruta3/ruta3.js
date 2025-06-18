document.getElementById('fechita').addEventListener('click', () => {
  fetch('http://localhost:3000/api/promesa3')
    .then(response => response.json())
    .then(data => {
      document.getElementById('respuesta').textContent = `${data.mensaje} — ${data.fecha}`;
    })
    .catch(error => {
      document.getElementById('respuesta').textContent = 'Ocurrió un error al conectar con el servidor.';
      console.error('Error:', error);
    });
});


// Botón para ir a /
document.getElementById('nextRoute').addEventListener('click', () => {
  window.location.href = '/';
});

