//variavel de escopo global
let num = 10;

function multiplica(num){
    //variavel de escopo de funcao
    let result = 1;
    
    //variavel de escopo de bloco
    for (let i = 1; i <= num ; i++){
        console.log("i=",i)
        result *= i
    }

    console.log("result= ",result)
}

multiplica(num)

console.log("num = ", num)
console.log(" i = ", i)
