document.addEventListener('DOMContentLoaded', function () {
  // Hacer una solicitud al servidor para obtener los productos
  axios.get('/productos')
    .then(response => {
      const productos = response.data;
      const gridProductos = document.querySelector('.Grid-Productos');

      // Iterar sobre los productos y agregarlos al HTML
      productos.forEach(producto => {
        const productoHTML = `
                    <div class="Producto">
                        <a href="PagDeInpecionDProducto.html"><img src="${producto.imagen}" alt="${producto.nombre}"></a>
                        <h2>${producto.nombre}</h2>
                        <p>₡${producto.precio}</p>
                        <button>Agregar al carrito</button>
                    </div>
                `;
        gridProductos.insertAdjacentHTML('beforeend', productoHTML);
      });
    })
    .catch(error => {
      console.error('Error al obtener los productos:', error);
    });
});
