///variável do tipo objeto
var pessoa = {
    nome:"Lucas",
    idade:27,
    estudante: true
}
//switch/case que escolhe entre duas possibilidades de opções
switch(pessoa.estudante){
    case true:
        console.log("Estudante")
        break;
    case false:
        console.log("Graduado")
        break;
    default:
        console.log("Aluno não registrado")
        break;
}
