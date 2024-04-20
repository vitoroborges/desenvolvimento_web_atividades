class Calculator {
    constructor(antesOperacaoElemento, depoisOperacaoElemento){
        this.antesOperacaoElemento = antesOperacaoElemento
        this.depoisOperacaoElemento = depoisOperacaoElemento
        this.clear()
    }

    clear(){
        this.antesOperacao = ' '
        this.depoisOperacao = ' '
        this.operacao = undefined 
    }

    delete(){
        this.depoisOperacao = this.depoisOperacao.toString().slice(0, -1)
    }

    adicionarNumero(numero){
        if (numero === '.' && this.depoisOperacao.includes('.')) return
        this.depoisOperacao = this.depoisOperacao.toString() + numero.toString()
    }

    escolhaOperacao(operacao){
        if (this.depoisOperacao === '') return
        if (this.antesOperacao !== ''){
            this.computar()
        }
        this.operacao = operacao
        this.antesOperacao = this.depoisOperacao
        this.depoisOperacao = ''
    }

    computar(){
        let computacao
        const antes = parseFloat(this.antesOperacao)
        const depois = parseFloat(this.depoisOperacao)

        if (isNaN(antes) || isNaN(depois)) return
        switch(this.operacao){
            case '+': 
                computacao = antes + depois
                break
            case '-':
                computacao = antes - depois
                break
            case 'x':
                computacao = antes * depois
                break
            case '÷':
                computacao = antes / depois
                break
            case '%':
                computacao = (antes / depois) * 100;
                break
            case '^': 
                computacao = Math.pow(antes, depois);
                break
            case 'log':
                computacao = Math.log(depois);
                break
            case 'rad':
                computacao = Math.sqrt(depois);
                break
            case '!':
                computacao = this.fatorizacao(antes);
                break
            case 'sen':
                computacao = Math.sin(antes);
                break
            case 'cos': 
                computacao = Math.cos(antes)
                break
            case 'tan': 
                computacao = Math.tan(antes);
                break 
            case 'tanh':
                computacao = Math.tanh(antes);
                break       
            case 'senh':
                computacao = Math.sinh(antes)
                break
            case 'cosh': 
                computacao = Math.cosh(antes)
                break
            default: 
                return
        }
        this.depoisOperacao = computacao 
        this.operacao = undefined
        this.antesOperacao = ''
    }

    fatorizacao(num){
        if(num === 0 || num === 1){
            return 1;
        }
        return num * this.fatorizacao(num - 1);
    }

    getDisplayNumero(numero){
        const stringNumero = numero.toString()
        const integerDigitos = parseFloat(stringNumero.split('-')[0])
        const decimalNumeros = stringNumero.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigitos)){
            integerDisplay = ''
        } else {
            integerDisplay = integerDigitos.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalNumeros != null){
            return `${integerDisplay}.${decimalDigitos}`
        } else {
            return integerDisplay
        }
    }

    atualizarDisplay(){
        this.depoisOperacaoElemento.innerText = 
            this.getDisplayNumero(this.depoisOperacao)
        if (this.operacao != null){
            this.antesOperacaoElemento.innerText = 
                `${this.getDisplayNumero(this.antesOperacao)} ${this.operacao}`
        } else {
            this.antesOperacaoElemento.innerText = ''
        } 
    } 
}

const numeroBotoes = document.querySelectorAll('[data-numero]')
const operacoesBotoes = document.querySelectorAll('[data-operacao]')
const igualBotao = document.querySelector('[data-igual]')
const apagarBotao = document.querySelector('[data-deletar]')
const limparTudo = document.querySelector('[data-limpar-tudo]')
const antesOperacaoElemento = document.querySelector('[data-antes-operacao]')
const depoisOperacaoElemento = document.querySelector('[data-depois-operacao]')

const calculator = new Calculator(antesOperacaoElemento, depoisOperacaoElemento)

numeroBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        calculator.adicionarNumero(botao.innerText)
        calculator.atualizarDisplay()
    })
})

operacoesBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        calculator.escolhaOperacao(botao.innerText)
        calculator.atualizarDisplay()
    })
});

igualBotao.addEventListener('click', botao => {
    calculator.computar()
    calculator.atualizarDisplay()
})

limparTudo.addEventListener('click', botao => {
    calculator.clear()
    calculator.atualizarDisplay()
})

apagarBotao.addEventListener('click', botao => {
    calculator.delete()
    calculator.atualizarDisplay()
})

document.addEventListener('keydown', function (event){
    let padraoNumero = /[0-9]/g;
    let padraoOperadores = /[+\-*\/]/g;

    if(event.key.match(padraoNumero)){
        event.preventDefault();
        calculator.adicionarNumero(event.key)
        calculator.atualizarDisplay()
    }
    if(event.key === '.'){
        event.preventDefault();
        calculator.adicionarNumero(event.key)
    }
    if(event.key.match(padraoOperadores)){
        event.preventDefault();
        calculator.escolhaOperacao(event.key)
        calculator.atualizarDisplay()
    }
    if(event.key === 'Enter' || event.key === '='){
        event.preventDefault();
        calculator.computar()
        calculator.atualizarDisplay()
    }
    if(event.key === 'Backspace'){
        event.preventDefault();
        calculator.delete()
        calculator.atualizarDisplay()
    }
    if(event.key === 'Delete'){
        event.preventDefault();
        calculator.clear()
        calculator.atualizarDisplay()
    }
})