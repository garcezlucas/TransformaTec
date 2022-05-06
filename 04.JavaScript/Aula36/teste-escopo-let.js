// declaração de variável com let - não pode ser redeclarada no mesmo escopo
let numero = 10;

console.log("Variável de escopo global 'numero':",numero);

function imprimedez(){

    //variável declarada dentro do escopo de uma função - esta variável existe apenas dentro deste bloco 
    let numero = "dez"
    console.log("Variável de escopo de função 'numero':",numero);

    //variável numero declarada dentro de escopo de bloco
    for (let numero = 0; numero <= 10; numero++) {
        console.log("Variável de escopo de bloco 'numero':",numero);
    }
}

// chamada da função imprimedez()
imprimedez()
