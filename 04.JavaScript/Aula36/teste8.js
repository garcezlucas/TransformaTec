
let revendaDeCarros = [
{
    marca: 'ford',
    modelo: 'fiesta',
    cor: 'prata',
},
{
    marca: 'chevrolet',
    modelo: 'Onix',
    cor: 'prata',
},
{
    marca: 'fiat',
    modelo: 'marea bomba',
    cor: 'prata',
}
];

//obtem todos os objetos dentro do array carrosObj
for (let carro of revendaDeCarros) {

    //obtem uma propriedade especifica
    console.log(carro.cor);

    //obtem todas as propriedades do objeto
    for (propriedade in carro) {
        console.log(propriedade +":"+carro[propriedade]);
    }
}
