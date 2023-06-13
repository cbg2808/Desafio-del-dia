const miBoton = document.getElementById("miBoton");
miBoton.addEventListener("click", handleClick)
function handleClick() { alert("Hola!! Has hecho click en el botón.")}
const miBoton2 = document.getElementById("miBoton2");
miBoton2.addEventListener("click", handleClick2)
function handleClick2() {
    document.getElementById("miBoton2").style.background = 'blue';
    document.getElementById("miBoton2").style.width = '100px';
    document.getElementById("miBoton2").style.height = '50px';
    document.getElementById("miBoton2").style.border = '20px';
}
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

function validateEmail(email) {
    const regex =  /^[^\s@]+@[^\s@]+\.[^\s@]{2,7}$/
    return regex.test(email)
  }
function validateForm() {
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    if (!validateEmail(email)) {
      alert('Por favor ingrese un correo electrónico válido.');
    } else {
      alert('Correo electrónico enviado correctamente.');
    }
  } 
  
  document.querySelector("button.button-menu-toggle")
  .addEventListener("click", function() {
         document.querySelector(".nav-links").
                    classList.toggle("nav-links-responsive")})
