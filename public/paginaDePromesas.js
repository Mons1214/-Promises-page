// Botón de fecha
document.getElementById('fecha').addEventListener('click', () => {
  fetch('http://localhost:3000/api/hola')
    .then(response => response.json())
    .then(data => {
      document.getElementById('respuesta').textContent = `${data.mensaje} — ${data.fecha}`;
    })
    .catch(error => {
      document.getElementById('respuesta').textContent = 'Ocurrió un error al conectar con el servidor.';
      console.error('Error:', error);
    });
});

// Botón para ir a /ruta1
document.getElementById('boton').addEventListener('click', () => {
  window.location.href = '/ruta1';
});