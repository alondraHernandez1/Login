const form = document.getElementById('formulario');
const usuario = document.getElementById('usuario');
const contraseña = document.getElementById('contraseña');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (usuario.value === 'usuario' && contraseña.value === 'contraseña') {
    alert('Inicio de sesión exitoso!');
  } else {
    alert('Nombre de usuario o contraseña incorrectos');
  }
});
