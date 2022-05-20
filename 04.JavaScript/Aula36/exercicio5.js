let usuarios = [
    {
        nome:"Lucas",
        sobrenome:"Garcez",
        idade:"27",
        email:"garcezlucas@tranformatec.com"
    },
    {
        nome:"Joao",
        sobrenome:"Mauro",
        idade:"26",
        email:"joao@tranformatec.com"
    },
    {
        nome:"Arthur",
        sobrenome:"Da DIO",
        idade:"22",
        email:"arthur@tranformatec.com"
    }
];

//pega o índice do objeto "usuário" dentro de um array de objetos
for (const usuario of usuarios.entries()) {

    console.log(usuario[1])
}