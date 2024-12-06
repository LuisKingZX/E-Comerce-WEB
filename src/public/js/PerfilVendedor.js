function cargarFotoPerfil() {
    var imgPerfil = document.querySelector('.profile img');

    imgPerfil.src = 'profile-picture.jpg';
    imgPerfil.alt = 'Foto de perfil del vendedor';
}

function llenarInformacionVendedor() {
    var nombre = 'John Doe';
    var id = '123456789';
    var tramo = 'Gold';
    var correoElectronico = 'johndoe@example.com';

    var nombreElement = document.querySelector('.profile-info #nombre');
    var idElement = document.querySelector('.profile-info #id');
    var tramoElement = document.querySelector('.profile-info #tramo');
    var correoElement = document.querySelector('.profile-info #correo');

    nombreElement.textContent = nombre;
    idElement.textContent = id;
    tramoElement.textContent = tramo;
    correoElement.textContent = correoElectronico;
}
window.onload = function() {
    cargarFotoPerfil();
    llenarInformacionVendedor();
};
