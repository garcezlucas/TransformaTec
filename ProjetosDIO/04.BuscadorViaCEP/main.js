'use-strict'

const cep = document.getElementById('cep')
const pesquisar = document.getElementById('pesquisar')
const limpar = document.getElementById('limpar')

// Validar o CEP

const validarCep = (cep) => {
    // retorna verdadeiro ou falso
    // Expressa regular verifica se os caracteres são numéricos e tem 8 de comprimento
    return cep.length === 8 && /^[0-9]+$/.test(cep)
    //não esquecer de colocar o returnem caso de função com mais de uma linha
}

const preencherDados = async (endereco) => {

    const div_resposta = document.createElement("div")
    div_resposta.setAttribute("class", "container")
    div_resposta.setAttribute("id", "div_resposta")

    const logradouro = document.createElement("p")
    logradouro.setAttribute("id", "logradouro")
    logradouro.setAttribute("class", "resposta")
    logradouro.innerHTML = endereco.logradouro

    const bairro = document.createElement("p")
    bairro.setAttribute("id", "bairro")
    bairro.setAttribute("class", "resposta")
    bairro.innerHTML = endereco.bairro

    const localidade = document.createElement("p")
    localidade.setAttribute("id", "localidade")
    localidade.setAttribute("class", "resposta")
    localidade.innerHTML = endereco.localidade

    div_resposta.appendChild(logradouro)
    div_resposta.appendChild(bairro)
    div_resposta.appendChild(localidade)

    document.body.appendChild(div_resposta)
}

const pesquisarCep = async () => {

    const cep_valor = cep.value

    try{

        if (validarCep(cep_valor)){

            const viacep_url = `https://viacep.com.br/ws/${cep_valor}/json/`

            const cep_dados = await fetch(viacep_url)
            const cep_json = await cep_dados.json()

            console.log(cep_json)

            if (cep_json.hasOwnProperty('erro')){
                throw{
                    name: "ErroCEP",
                    message: 'Não foi possível consulta o CEP',
                }

            } else {
                await preencherDados(cep_json)
            }

        }else {

            throw {
                name: "ErroCEP",
                message: 'CEP inválido',
            }

        }

    } catch (erro) {

        const erro_cep = document.createElement("p")
        erro_cep.setAttribute("id", "erro_cep")
        erro_cep.setAttribute("class", "erro_cep")
        erro_cep.innerHTML = erro.message

        document.body.appendChild(erro_cep)
    }

}

const limparDados = () => {

    const div_resposta = document.getElementById("div_resposta")

    const erro = document.getElementById("erro_cep")

    document.getElementById("cep").value = ""

    if (div_resposta){
        document.body.removeChild(div_resposta)
    }else if (erro{
        document.body.removeChild(erro)
    }

}


pesquisar.addEventListener('click', pesquisarCep)
limpar.addEventListener('click', limparDados)
cep.addEventListener('focus', limparDados)