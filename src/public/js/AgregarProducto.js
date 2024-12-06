// AgregarProducto.js

$(document).ready(function() {
    // Manejar el envío del formulario
    $('#productForm').submit(function(event) {
        event.preventDefault(); // Evitar el envío del formulario normal

        // Obtener los valores del formulario
        var tipo = $('#Tipo').val();
        var nombre = $('#Nombre').val();
        var cantidad = $('#Cantidad').val();
        var precio = $('#Precio').val();
        var media = $('#Media').prop('files')[0]; // Archivo de medios

        // Crear un objeto FormData para enviar los datos
        var formData = new FormData();
        formData.append('Tipo', tipo);
        formData.append('Nombre', nombre);
        formData.append('Cantidad', cantidad);
        formData.append('Precio', precio);
        formData.append('Media', media);

})
});
