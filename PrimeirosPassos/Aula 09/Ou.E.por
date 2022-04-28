programa
{

    funcao inicio()
    {
        logico a,b

        a = verdadeiro
        b = falso

	   // Se uma apenas das condições for verdadeira, o resultado será verdadeiro
        se (a == verdadeiro ou b == verdadeiro){
        	escreva("Resultado verdadeiro\n\n")	
        }senao{
        	escreva(" Resultado falso\n\n")	
        }
        

	   // As duas sentenças devem ser verdadeiras para que o resultado seja verdadeiro
        se (a == verdadeiro e b == verdadeiro){
        	escreva("Resultado verdadeiro\n\n")	
        }senao{
        	escreva(" Resultado falso\n\n")	
        }
       
    }
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 614; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */