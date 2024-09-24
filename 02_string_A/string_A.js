function verificarA() {
    const input = document.getElementById('text').value
    const regexA = /a/i

    if (regexA.test(input)) {
        alert(`A letra 'A' ou 'a' está presente no texto.`);
    } else {
        alert(`A letra 'A' ou 'a' não está presente no texto.`);
    }
}
