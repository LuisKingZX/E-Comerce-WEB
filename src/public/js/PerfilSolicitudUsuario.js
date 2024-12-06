var tipoIdElement = document.getElementById('tipoId');
var idElement = document.getElementById('id');
var nombreElement = document.getElementById('nombre');
var telefonoElement = document.getElementById('telefono');
var correoElement = document.getElementById('correo');
var fotoElement = document.getElementById('foto');
var documentosPendientesElement = document.getElementById('documentosPendientes');
var aceptarBtn = document.getElementById('aceptarBtn');
var rechazarBtn = document.getElementById('rechazarBtn');

var userData = {
    tipoId: 'DNI',
    id: '12345678A',
    nombre: 'Juan Pérez',
    telefono: '123456789',
    correo: 'juanperez@example.com',
    foto: 'profile-picture.jpg',
    documentosPendientes: ['Documento 1', 'Documento 2', 'Documento 3']
};

function cargarDatosUsuario() {
    tipoIdElement.textContent = userData.tipoId;
    idElement.textContent = userData.id;
    nombreElement.textContent = userData.nombre;
    telefonoElement.textContent = userData.telefono;
    correoElement.textContent = userData.correo;
    fotoElement.src = userData.foto;

    userData.documentosPendientes.forEach(function(documento) {
        var li = document.createElement('li');
        li.textContent = documento;
        documentosPendientesElement.appendChild(li);
    });
}

function aceptarSolicitud() {
    alert('Solicitud aceptada');
}

function rechazarSolicitud() {
    alert('Solicitud rechazada');
}

window.onload = function() {
    cargarDatosUsuario();
};

aceptarBtn.addEventListener('click', aceptarSolicitud);
rechazarBtn.addEventListener('click', rechazarSolicitud);
