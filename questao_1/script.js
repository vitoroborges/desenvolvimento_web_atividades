combinacao()

function fatorial(fatorial) {

  let resultado = fatorial;

  for (let controle = 1; controle < fatorial; controle++) {
    resultado = resultado * controle
  }

  return Number(resultado);
}

function combinacao() {

  let n = Number(prompt("Qual o numero "));
  let k = Number(prompt("Qual a amostra "));

  let resultado = fatorial(n) / fatorial(k) * fatorial(n - k)

  document.getElementById("numero").innerHTML = n;
  document.getElementById("amostras").innerHTML = k;
  document.getElementById("resultado").innerHTML = Number(resultado);

}