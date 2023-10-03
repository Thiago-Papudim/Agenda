const form  = document.getElementById('form-atividade');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNomePessoa = document.getElementById('nome-pessoa');
    const inputNumeroPessoa = document.getElementById('telefone-pessoa');

    if (nomes.includes(inputNomePessoa.value)) {
        alert(`A pessoa: ${inputNomePessoa.value} já foi inserida`);
    } else {
        nomes.push(inputNomePessoa.value);
        numeros.push(inputNumeroPessoa.value);
    
        let linha = '<tr>';
        linha += `<td>${inputNomePessoa.value}</td>`;
        linha += `<td>${inputNumeroPessoa.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNomePessoa.value = '';
    inputNumeroPessoa.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}