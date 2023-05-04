function validarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value.trim();
    var email = document.getElementById("email").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
  
    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor complete todos los campos del formulario.");
      return false;
    }
  
    // Validar el formato del correo electrónico
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor ingrese una dirección de correo electrónico válida.");
      return false;
    }
  
    // Si se pasan todas las validaciones, se envía el formulario
    alert("¡Gracias por contactarnos! Su mensaje ha sido enviado.");
    return true;
}
  