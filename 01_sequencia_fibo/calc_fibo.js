function fibonacci(num) {
    let fib = [0, 1];
    
    while (fib[fib.length - 1] < num) {
        fib.push(fib[fib.length - 1] + fib[fib.length - 2])
    }

    return fib.includes(num)
}

//função fibonacci irá verificar se atende as condições descritas no enuciado da atv, onde armazenamos 0 e 1 e usamos a estrutura de repetição while para realizar o teste que desta vez destro da estrutura, adicionamos(push) o valor das duas casas anteriores e retornamos a inclusão de um numero.

function verificarFibonacci() {
    const input = document.getElementById('numberInput').value;
    const numero = parseInt(input)

//função verificarFibo irá armazenar o valor valido e inteiro para ser passado no HMTL utilizando o id como "tráfego"

    if (isNaN(numero)) {
        alert("Por favor, insira um número válido.")
        return
    }

//fazendo uma verificação da função acima para testar se é um numero válido

    const pertence = fibonacci(numero);

    if (pertence) {
        alert(`O número ${numero} pertence à sequência de Fibonacci.`)
    } else {
        alert(`O número ${numero} não pertence à sequência de Fibonacci.`)
    }

//armazenando o valor pertence de um numero válido dentro da primeira função while para realizar a verificação e exibir em tela se o numero é válido ou não, respeitando a condição do if else.
}