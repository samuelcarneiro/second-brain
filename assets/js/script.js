/* Mostrar o ano atual no footer */
//Pega o elemento span#mostrarAnoAtual
const ano = document.getElementById("mostrarAnoAtual");
// Pega a data atual
const anoAtual = new Date();
//Colocar o ano atual no span
ano.innerHTML = anoAtual.getFullYear();