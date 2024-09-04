/* Mostrar o ano atual no footer */
const ano = document.getElementById("mostrarAnoAtual");//Pega o elemento span#mostrarAnoAtual
const anoAtual = new Date();// Pega a data atual
ano.innerHTML = anoAtual.getFullYear();//Colocar o ano atual no span
