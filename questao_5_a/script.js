function calcular() {
    var dataString = document.getElementById("data").value;
    var dataParts = dataString.split("/");

    // Verifica se o formato da data é válido
    if (dataParts.length !== 3 || dataParts[0].length !== 2 || dataParts[1].length !== 2 || dataParts[2].length !== 4) {
        alert("Formato de data inválido. Por favor, insira a data no formato dd/mm/aaaa.");
        return;
    }

    var dia = parseInt(dataParts[0]);
    var mes = parseInt(dataParts[1]);
    var ano = parseInt(dataParts[2]);

    var dataAtual = new Date();
    var dataFutura = new Date(ano, mes - 1, dia);

    // Verifica se a data é válida
    if (dataFutura < dataAtual) {
        alert("Por favor, insira uma data futura.");
        return;
    }

    var diferenca = dataFutura.getTime() - dataAtual.getTime();
    var dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));
    var meses = Math.floor(dias / 30.44);
    var anos = Math.floor(meses / 12);

    var resultado = "Faltam ";
    resultado += dias + " dias, ";
    resultado += meses + " meses e ";
    resultado += anos + " anos para a data digitada.";

    document.getElementById("resultado").innerText = resultado;
}
