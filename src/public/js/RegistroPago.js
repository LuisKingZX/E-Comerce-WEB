function validateForm() {
    var name = document.getElementById("name").value;
    var cardNumber = document.getElementById("cardNumber").value;
    var expiryDate = document.getElementById("expiryDate").value;
    var cvv = document.getElementById("cvv").value;

    if (name === "" || cardNumber === "" || expiryDate === "" || cvv === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }


    // simulacion de envío de datos a un servidor
    alert("Pago exitoso. Datos enviados:\nNombre: " + name + "\nNúmero de Tarjeta: " + cardNumber + "\nFecha de Vencimiento: " + expiryDate + "\nCVV: " + cvv);
    return true;
}
