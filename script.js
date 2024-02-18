function copiarTexto() {
  var texto = document.getElementById("textoACopiar");
  var input = document.createElement('input');
  input.setAttribute('value', texto.textContent);
  document.body.appendChild(input);
  input.select();
  document.execCommand('copy');
  document.body.removeChild(input);
  alert("¡Texto copiado!");
}
