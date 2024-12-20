const $btnSignIn= document.querySelector('.sign-in-btn'),
      $btnSignUp = document.querySelector('.sign-up-btn'),  
      $signUp = document.querySelector('.sign-up'),
      $signIn  = document.querySelector('.sign-in');

document.addEventListener('click', e => {
    if (e.target === $btnSignIn || e.target === $btnSignUp) {
        $signIn.classList.toggle('active');
        $signUp.classList.toggle('active');
    }

    document.getElementById("loginForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el envío del formulario por defecto
        // Redireccionar a la página deseada
        window.location.href = "/Principal";
    });
    })