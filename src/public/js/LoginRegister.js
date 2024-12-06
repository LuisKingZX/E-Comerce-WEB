const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('form');
        const passwordInput = document.getElementById('Password');
        const confirmPasswordInput = document.getElementById('Password2');
        const idInput = document.getElementById('ID');
        const phoneInput = document.getElementById('Phone');
        const emailInput = document.getElementById('Email');
        const addressInput = document.getElementById('Address');
    
        form.addEventListener('submit', function(event) {
            let isValid = true;
    
            // Validación del nombre y apellidos
            const firstNameInput = document.getElementById('FirstName');
            const lastNameInput = document.getElementById('LastName');
            const secondLastNameInput = document.getElementById('SecondLastName');
            const nameRegex = /^[a-zA-Z]{4,}$/;
            if (!nameRegex.test(firstNameInput.value) || !nameRegex.test(lastNameInput.value) || !nameRegex.test(secondLastNameInput.value)) {
                isValid = false;
                alert("Los campos de nombre y apellidos deben tener al menos 4 letras y contener solo letras.");
            }
    
            // Validación del ID
            const idRegex = /^\d{9,}$/;
            if (!idRegex.test(idInput.value)) {
                isValid = false;
                alert("El ID debe tener al menos 9 dígitos numéricos.");
            }
    
            // Validación de la contraseña
            if (passwordInput.value.length < 8) {
                isValid = false;
                alert("La contraseña debe tener al menos 8 caracteres.");
            }
    
            // Validación del teléfono
            const phoneRegex = /^\d{7,14}$/;
            if (!phoneRegex.test(phoneInput.value)) {
                isValid = false;
                alert("El número de teléfono debe tener entre 7 y 14 dígitos numéricos.");
            }
    
            // Validación del correo electrónico
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value)) {
                isValid = false;
                alert("Ingrese un correo electrónico válido.");
            }
    
            // Validación de la dirección
            if (addressInput.value.length < 500) {
                isValid = false;
                alert("La dirección debe tener al menos 500 caracteres.");
            }
    
            // Validación de la confirmación de la contraseña
            if (passwordInput.value !== confirmPasswordInput.value) {
                isValid = false;
                alert("Las contraseñas no coinciden.");
            }

            // Validación de campos adicionales si se marca la casilla de ser vendedor
        if (vendorCheckbox.checked) {
            // Validación del nombre del tramo
            if (tramoNameInput.value.trim() === "") {
                isValid = false;
                alert("Por favor, ingrese el nombre del tramo.");
            }

            // Validación de la subida de documentos
            if (documentInput.files.length === 0) {
                isValid = false;
                alert("Por favor, suba los documentos requeridos.");
            }
        }
    
            if (!isValid) {
                event.preventDefault(); // Evitar que se envíe el formulario si hay campos inválidos
            }
        });
    });

    // Redireccionar al usuario a la página específica después de completar el registro
    form.addEventListener('submit', function(event) {
        window.location.href = "/Principal";
    });
});
