function inverterTexto() {
  var inputText = document.getElementById("inputText").value.trim();
  var outputText = document.getElementById("outputText");

  // Dividindo a string em palavras e invertendo a ordem
  var palavras = inputText.split(" ").reverse();

  // Unindo as palavras em uma string novamente
  outputText.value = palavras.join(" ");
}
