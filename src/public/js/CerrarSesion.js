document.getElementById('btn-logout').addEventListener('click', async function() {
    try {
      // Hacer una solicitud al backend para cerrar sesión
      const response = await axios.post('/logout'); // Ruta en el servidor para cerrar sesión

        if (response.status === 200) {
        // Si la solicitud es exitosa, redirigir a la página de inicio de sesión
        window.location.href = '/LoginRegister.html';
        } else {
        console.error('Error al cerrar sesión:', response.statusText);
}
    } catch (error) {
        console.error('Error al cerrar sesión:', error);
    }
});
