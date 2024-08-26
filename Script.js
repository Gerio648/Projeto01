var textInput = document.querySelector("#input-texto");

function criptografar() {
    var texto = textInput.value;

    var resultCripto = texto.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");

    document.getElementById('output').innerHTML = 
    '<textarea readonly id="input-texto-output">' + resultCripto + 
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function descriptografar() {
    var texto = textInput.value;

    var resultDescripto = texto.replace(/enter/g, "e")
                               .replace(/imes/g, "i")
                               .replace(/ai/g, "a")
                               .replace(/ober/g, "o")
                               .replace(/ufat/g, "u");

    document.getElementById('output').innerHTML = 
    '<textarea readonly id="input-texto-output">' + resultDescripto +
    '</textarea>' + '<button class="btn-copiar" id="copiar" onclick="copiar()">Copiar</button>';
}

function copiar() {
    var textoCop = document.querySelector('#input-texto-output');

    textoCop.select();
    textoCop.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand('copy');
    alert("Texto Copiado");
}