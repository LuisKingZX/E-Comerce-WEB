document.addEventListener("DOMContentLoaded", function() {
    // Detalles de la orden ficticia
    var orden = {
        numero: "ORD123456",
        fecha: "2024-04-01",
        productos: [
            { nombre: "1L de leche", precio: 960 },
            { nombre: "Banano Criollo", precio: 650 },
            { nombre: "1K de Tomate", precio: 1800 },
            { nombre: "15 Naranjas", precio: 800 }
        ]
    };

    // Mostrar detalles de la orden en el HTML
    var detallesOrden = document.getElementById("DetallesDeOrden");
    detallesOrden.innerHTML = `
        <p>Número de orden: ${orden.numero}</p>
        <p>Fecha: ${orden.fecha}</p>
        <h2>Productos:</h2>
        <ul>
            ${orden.productos.map(producto => `<li>${producto.nombre} - $${producto.precio}</li>`).join('')}
        </ul>
    `;
});

//    fetchOrderDetails(); // Cargar los detalles de la orden cuando la página se carga
//function fetchOrderDetails() {
    // Realizar una solicitud a la API para obtener los detalles de la orden desde la base de datos externa
//    fetch('url_del_api')
//        .then(response => response.json())
//        .then(data => {
//            displayOrderDetails(data);
//        })
//        .catch(error => {
//            console.error('Error al obtener los detalles de la orden:', error);
//        });
//}

//function displayOrderDetails(orderDetails) {
//    const orderDetailsContainer = document.getElementById('orderDetails');
//    let html = '<h2>Detalles de la Orden</h2>';
    
    // Construir la estructura HTML para mostrar los detalles de la orden
//    html += '<p><strong>Número de Orden:</strong> ' + orderDetails.orderNumber + '</p>';
//    html += '<p><strong>Producto:</strong> ' + orderDetails.productName + '</p>';
//    html += '<p><strong>Precio:</strong> ' + orderDetails.price + '</p>';
//    html += '<p><strong>Fecha de Compra:</strong> ' + orderDetails.purchaseDate + '</p>';
    
//    orderDetailsContainer.innerHTML = html;
//}