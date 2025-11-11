let feito = 0;
let total = 0;

function atualizarContadores() {
document.getElementById("feito").innerText = feito;
document.getElementById("total").innerText = total;
}

function adicionarTarefa() {
const tarefa = document.getElementById("tarefa").value;
const categoria = document.getElementById("categoria").value;
const prioridade = document.getElementById("prioridade").value;
const data = document.getElementById("data").value;
const repeticao = document.getElementById("repeticao").value;

if (!tarefa) return alert("Digite uma tarefa!");

const tabela = document.getElementById("tabelaTarefas").querySelector("tbody");
const novaLinha = tabela.insertRow();

novaLinha.innerHTML =     `<td>${tarefa}</td>     <td>${categoria}</td>     <td>${prioridade}</td>     <td>${data}</td>     <td>${repeticao}</td>     <td><input type="checkbox" onchange="marcarFeito(this)"></td>`  ;

total++;
atualizarContadores();

document.getElementById("tarefa").value = "";
document.getElementById("categoria").value = "";
document.getElementById("data").value = "";
}

function marcarFeito(checkbox) {
if (checkbox.checked) {
feito++;
} else {
feito--;
}
atualizarContadores();
}