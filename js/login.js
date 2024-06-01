function resetErrorMessages() {
    let errorElements = document.querySelectorAll(".error-message");
    errorElements.forEach((element)=> {
        element.innerText = "";
    });
}
function displayErrorMessage(elementId, message) {
    let errorElement = document.getElementById(elementId);
    errorElement.innerText = message;
}
function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);
}


document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("loginForm");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();

        resetErrorMessages();

        let username = document.getElementById("username").value.trim();
        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();
        let isValid = true;

        if (username === "") {
            displayErrorMessage("usernameError", "Por favor ingrese un usuario.");
            isValid = false;
        }

        if (!isValidEmail(email)) {
            displayErrorMessage("emailError", "Por favor ingrese un correo electrónico válido.");
            isValid = false;
        }

        if (password.length < 8) {
            displayErrorMessage("passwordError", "La contraseña debe tener al menos 8 caracteres.");
            isValid = false;
        }

        if (isValid) {
            alert("¡Formulario enviado correctamente!");
        }
    });
} );

