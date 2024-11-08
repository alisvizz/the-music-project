// Función para mostrar solo la sección de log in y ocultar el resto del contenido
function toggleLogin() {
    const loginSection = document.getElementById('login');
    const registroSection = document.getElementById('registro');
    const otherSections = document.querySelectorAll('body > section:not(.log-in):not(.registro)');

    if (loginSection.style.display === 'none' || loginSection.style.display === '') {
        // Mostrar la sección de log in y ocultar otras secciones
        loginSection.style.display = 'block';
        registroSection.style.display = 'none';
        otherSections.forEach(section => section.style.display = 'none');
    } else {
        // Ocultar la sección de log in y volver a mostrar otras secciones
        loginSection.style.display = 'none';
        otherSections.forEach(section => section.style.display = 'block');
    }
}

// Función para mostrar solo la sección de registro y ocultar el resto del contenido
function toggleRegistro() {
    const registroSection = document.getElementById('registro');
    const loginSection = document.getElementById('login');
    const otherSections = document.querySelectorAll('body > section:not(.log-in):not(.registro)');

    if (registroSection.style.display === 'none' || registroSection.style.display === '') {
        // Mostrar la sección de registro y ocultar otras secciones
        registroSection.style.display = 'block';
        loginSection.style.display = 'none';
        otherSections.forEach(section => section.style.display = 'none');
    } else {
        // Ocultar la sección de registro y volver a mostrar otras secciones
        registroSection.style.display = 'none';
        otherSections.forEach(section => section.style.display = 'block');
    }
}

// Registro de usuario
document.getElementById('registroForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;
    const registroMessage = document.getElementById('registroMessage');

    if (newUsername && newPassword) {
        localStorage.setItem('username', newUsername);
        localStorage.setItem('password', newPassword);
        registroMessage.textContent = 'Registro exitoso. ¡Ya puedes iniciar sesión!';
        registroMessage.style.color = 'green';
        document.getElementById('newUsername').value = '';
        document.getElementById('newPassword').value = '';
        toggleLogin(); // Cambia a la vista de log in
    } else {
        registroMessage.textContent = 'Por favor, completa ambos campos.';
        registroMessage.style.color = 'red';
    }
});

// Función para recargar la página
function recargarPagina() {
    location.reload(); // Esto recargará la página actual desde cero
}



// Inicio de sesión
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const loginMessage = document.getElementById('loginMessage');

    // Recuperar las credenciales almacenadas
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    // Verificar las credenciales
    if (username === storedUsername && password === storedPassword) {
        loginMessage.textContent = 'Inicio de sesión exitoso. ¡Bienvenido!';
        loginMessage.style.color = 'green';

        // Ocultar el formulario de inicio de sesión y mostrar la página de "Mis Partituras"
        document.getElementById('login').style.display = 'none';
        document.getElementById('registro').style.display = 'none';
        document.getElementById('mis-partituras').style.display = 'block';
    } else {
        loginMessage.textContent = 'Usuario o contraseña incorrectos.';
        loginMessage.style.color = 'red';
    }
});

// Función para mostrar la partitura ampliada en el modal
function mostrarPartitura(src) {
    const modal = document.getElementById('modal');
    const partituraAmpliada = document.getElementById('partitura-ampliada');

    partituraAmpliada.src = src; // Establece la fuente de la imagen ampliada
    modal.style.display = 'flex'; // Muestra el modal
}

// Función para cerrar el modal al hacer clic en cualquier lugar del modal
function cerrarModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Oculta el modal
}