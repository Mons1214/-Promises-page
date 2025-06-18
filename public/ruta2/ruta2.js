document.getElementById('getRuta2').addEventListener('click', () => {
    fetch('http://localhost:3000/api/promesa2')
      .then(response => response.json())
      .then(data => {
        document.getElementById('resultado2').textContent = `${data.mensaje}, valor: ${data.valor}`;
      })
      .catch(error => {
        document.getElementById('resultado2').textContent = 'Error al obtener datos.';
        console.error('Error:', error);
      });
});

// Botón para ir a /ruta3
document.getElementById('nextRoute').addEventListener('click', () => {
  window.location.href = '/ruta3';
});