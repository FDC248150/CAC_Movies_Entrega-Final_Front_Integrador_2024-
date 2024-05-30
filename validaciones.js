const formInicioSesion = document.querySelector('.seccionRegistrarse form');
formInicioSesion.addEventListener('submit', function (event) {
    const email = formInicioSesion.querySelector('#email').value;
    const password = formInicioSesion.querySelector('#password').value;
    
    if (!/.+@.+\..+/.test(email)) {
        event.preventDefault();
        showError('email', 'Ingrese un email válido.');
    }
    
    if (password.length < 8) {
        event.preventDefault();
        showError('password', 'La contraseña debe tener al menos 8 caracteres.');
    }
});

const formRegistro = document.querySelectorAll('.seccionRegistrarse form')[1];
formRegistro.addEventListener('submit', function (event) {
    const nombre = formRegistro.querySelector('#nombre').value;
    const apellido = formRegistro.querySelector('#apellido').value;
    const email = formRegistro.querySelector('#email').value;
    const password = formRegistro.querySelector('#password').value;
    const fechaNacimiento = formRegistro.querySelector('#fechaNacimiento').value;
    const pais = formRegistro.querySelector('#pais').value;
    const terminos = formRegistro.querySelector('#terminos').checked;
    
    if (nombre.trim() === '') {
        event.preventDefault();
        showError('nombre', 'Ingrese su nombre.');
    }
    
    if (apellido.trim() === '') {
        event.preventDefault();
        showError('apellido', 'Ingrese su apellido.');
    }
    
    if (!/.+@.+\..+/.test(email)) {
        event.preventDefault();
        showError('email', 'Ingrese un email válido.');
    }
    
    if (password.length < 8) {
        event.preventDefault();
        showError('password', 'La contraseña debe tener al menos 8 caracteres.');
    }
    
    if (fechaNacimiento === '') {
        event.preventDefault();
        showError('fechaNacimiento', 'Ingrese su fecha de nacimiento.');
    }
    
    if (pais === '') {
        event.preventDefault();
        showError('pais', 'Seleccione su país.');
    }
    
    if (!terminos) {
        event.preventDefault();
        showError('terminos', 'Debe aceptar los términos y condiciones.');
    }
});

function showError(inputId, message) {
    const errorText = document.querySelector(`#${inputId} + .error-text`);
    errorText.textContent = message;
}
