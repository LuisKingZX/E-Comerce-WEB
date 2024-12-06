document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos relevantes del DOM
    const selectElements = document.querySelectorAll('select[name="Cantidad"]');
    const precioElements = document.querySelectorAll('.Precio p');
    const totalElements = document.querySelectorAll('.Total p');
    const quitarButtons = document.querySelectorAll('.Quitar button');
    const totalProductosElement = document.querySelector('.TotalColumna2 p:first-child');
    const totalEnvioElement = document.querySelector('.TotalColumna2 p:nth-child(2)');
    const totalNetoElement = document.querySelector('.TotalColumna2 p:nth-child(3)');
    const btnComprar = document.querySelector('.BtnComprar');

    // Función para actualizar el total de un producto
    function actualizarTotal(index) {
        const cantidad = parseInt(selectElements[index].value);
        const precio = parseInt(precioElements[index].textContent);
        const total = cantidad * precio;
        totalElements[index].textContent = total;
    }

    // Función para actualizar los totales generales
    function actualizarTotales() {
        let totalProductos = 0;
        let total = 0;
        totalElements.forEach(element => {
            total += parseInt(element.textContent);
            if (!isNaN(total)) {
                totalProductos++;
            }
        });
        const totalEnvio = 10000; // Supongamos que el envío cuesta 10000
        const totalNeto = total + totalEnvio;

        totalProductosElement.textContent = totalProductos;
        totalEnvioElement.textContent = totalEnvio;
        totalNetoElement.textContent = totalNeto;
    }

    // Agregar listeners para los select de cantidad
    selectElements.forEach((element, index) => {
        element.addEventListener('change', () => {
            actualizarTotal(index);
            actualizarTotales();
        });
    });

    // Agregar listeners para los botones de quitar
    quitarButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Eliminar el elemento del DOM
            const articulo = button.parentElement.parentElement;
            articulo.remove();
            actualizarTotales();
        });
    });

    // Agregar listener para el botón de comprar
    btnComprar.addEventListener('click', () => {
        // Aquí puedes implementar la lógica para procesar la compra
        alert('¡Gracias por su compra!');
    });

    // Inicializar los totales
    actualizarTotales();
});
