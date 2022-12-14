
//criando função para limpar o formulario

const limparFormulario = (endereco) => { // "=>" = function!
    document.getElementById('endereco').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';

}

const preencherFormulario = (endereco) => {
    document.getElementById('endereco').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;

}

//Validação do CEP com esxpressão regular 

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const pesquisarCep = async () => {                          // async de função asíncrona => não vai executar assim que começar o programa.
    limparFormulario();

    const cep = document.getElementById('cep').value;

    const url = `https://viacep.com.br/ws/${cep}/json/`;    //aspas estranha para concatenar com o dólar

    if (cepValido(cep)) {
        const dados = await fetch(url)                          //await = aguarde ... dados
        const endereco = await dados.json();

        if (endereco.hasOwnProperty('erro')) {                    //hasowproperty para ver c ta com valor de erro
            document.getElementById('endereco').innerHTML = 'CEP não encontrado!'

        } else {
            preencherFormulario(endereco);
        }
    } else {
        document.getElementById('cep').value = 'CEP incorreto!'
    }
};

document.getElementById('cep').addEventListener('focusout', pesquisarCep)



