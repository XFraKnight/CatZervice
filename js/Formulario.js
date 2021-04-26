alert("Bienvenid@, estoy encantado de contactar contigo^^")
//Correo
valor = document.getElementById("correo").value;
if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(valor)) ) {
  return false;
}