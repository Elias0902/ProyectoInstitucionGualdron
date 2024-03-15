var header = document.getElementById('Header');
var links = header.getElementsByTagName('a'); // Obtener todos los elementos <a> dentro del encabezado

window.addEventListener('scroll', () => {
  var scroll = window.scrollY;
  if (scroll > 10) {
    header.style.backgroundColor = '#121212';
    // Cambiar el color de los elementos <a>
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = '#fff';
    }
  } else {
    header.style.backgroundColor = 'transparent';
    // Restaurar el color original de los elementos <a>
    for (var i = 0; i < links.length; i++) {
      links[i].style.color = ''; // Esto restablece el color a su valor original definido en CSS
    }
  }
});