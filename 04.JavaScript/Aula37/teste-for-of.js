let garagem = [
    
    //0
    {
        cor:"azul",
        modelo: "fusca",
        ano: 1965,
    },

    //1
    {
        cor:"prata",
        modelo:"corcel",
        ano:1985
    },

    //2
    {
        cor: "marrom",
        modelo:"chevette",
        ano: 1986
    }
    
];

//laço for-of para varrer o vetor buscando todos os seus objetos
for(let carro of garagem){
    console.log(carro.ano)
}

//buscando um objeto no vetor indicando o indice/posição
console.log(garagem[2])