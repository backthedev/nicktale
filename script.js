function copiarTexto() {
  var texto = document.getElementById("textoACopiar");
  texto.focus();
  document.execCommand('selectAll');
  document.execCommand('copy');
  alert("¡Texto copiado!");
}
