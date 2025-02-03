function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
}
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}

let historico = [];

function insert(valor) {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML += valor;
}

function clean() {
    document.getElementById("resultado").innerHTML = "";
}

function back() {
    const resultado = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = resultado.slice(0, -1);
}

function calcular() {
    const resultado = document.getElementById("resultado");
    try {
        const expressao = resultado.innerHTML;
        const valorFinal = eval(expressao);

        // Atualiza o resultado na calculadora
        resultado.innerHTML = valorFinal;

        // Adiciona ao histórico
        atualizarHistorico(expressao, valorFinal);
    } catch (e) {
        alert("Erro na expressão");
        resultado.innerHTML = "";
    }
}

function atualizarHistorico(operacao, resultado) {
    const historicoLista = document.getElementById("historico-lista");

    // Adiciona a nova operação ao histórico
    historico.unshift(`${operacao} = ${resultado}`);

    // Mantém apenas os últimos 10 resultados
    if (historico.length > 10) {
        historico.pop();
    }

    // Atualiza o histórico na tela
    historicoLista.innerHTML = historico
        .map(item => `<li>${item}</li>`)
        .join("");
}
