// Datos de ejemplo de postulantes
var postulantes = [
    { nombre: "Nombre", edad: 20},
    { nombre: "Nombre", edad: 30},
    { nombre: "Nombre", edad: 28},
];

// Función para mostrar los postulantes en la página
function mostrarPostulantes() {
    var postulantesSection = document.getElementById("postulantes");
    postulantes.forEach(function(postulante) {
        var postulanteDiv = document.createElement("div");
        postulanteDiv.classList.add("postulante");
        postulanteDiv.innerHTML = `
            <h2> ${postulante.nombre}</h2>
            <p>Edad: ${postulante.edad}</p>
        `;
        postulantesSection.appendChild(postulanteDiv);
    });
}

//Llama a la función para mostrar los postulantes al cargar la página
window.onload = function() {
    mostrarPostulantes();
};
