// Função para alterar a cor de fundo com base no horário
function changeBackgroundColor() {
  var currentTime = new Date();
  var currentHour = currentTime.getHours();
  var body = document.body;

  // Verifica o horário atual e define a cor de fundo e a cor do texto
  if (currentHour >= 6 && currentHour < 12) {
    // Manhã: fundo branco com texto preto
    body.style.backgroundColor = "white";
    body.style.color = "black";
  } else if (currentHour >= 12 && currentHour < 18) {
    // Tarde: fundo amarelo com texto preto
    body.style.backgroundColor = "yellow";
    body.style.color = "black";
  } else if (currentHour >= 18 && currentHour < 24) {
    // Noite: fundo escuro com texto branco
    body.style.backgroundColor = "darkslategrey";
    body.style.color = "white";
  } else {
    // Madrugada: fundo azul com texto branco
    body.style.backgroundColor = "blue";
    body.style.color = "white";
  }
}

// Chama a função inicialmente para definir a cor com base no horário atual
changeBackgroundColor();

// Atualiza a cor de fundo a cada minuto
setInterval(changeBackgroundColor, 60000); // 60000 milissegundos = 1 minuto
