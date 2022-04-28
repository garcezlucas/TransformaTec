programa
{
	
	funcao inicio()
	{

		//declaração do vertor de números do tipo inteiro com 10 posições
		inteiro numeros[10]

		//posição (índice) do vetor
		inteiro posicao, soma = 0

		//Laço de repetição para alimentar as posições do vetor
		para(posicao = 0; posicao <10; posicao++){

			escreva("Informe o número para a posição [", posicao, "] do vetor: ")
			leia(numeros[posicao])
			limpa()
			
		}

		//laço de repetição para imprimir os dados do vetor
		para(posicao = 0; posicao <10; posicao++){

			soma = soma + numeros[posicao]

			escreva("\nNúmero na posição [", posicao, "] do vetor: ", numeros[posicao])
			escreva("\n")
			
		}

		escreva("\nA soma dos números é: ", soma, "\n")

		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 699; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */