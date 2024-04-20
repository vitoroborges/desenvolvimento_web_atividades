let message = ""; // Mensagem que será rolada
let intervalId; // ID do intervalo para controle

// Função para começar a rolar a mensagem
function startScrolling() {
  message = document.getElementById("messageInput").value; // Obtém a mensagem do campo de entrada
  intervalId = setInterval(rollMessage, 100); // Inicia um intervalo para rolar a mensagem
}

// Função para parar de rolar a mensagem
function stopScrolling() {
  clearInterval(intervalId); // Limpa o intervalo
}

// Função para rolar a mensagem
function rollMessage() {
  message = message.substring(1) + message.charAt(0); // Remove o primeiro caractere e o coloca no final
  document.getElementById("messageInput").value = message; // Atualiza o valor do campo de entrada com a mensagem rolada
}
