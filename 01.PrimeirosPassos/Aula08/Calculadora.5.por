programa
{
	real n1, n2, resultado
	caracter operacao
	
	funcao inicio()
	{
		escreva("Numero1: \n")
		leia(n1)
		escreva("Numero2: \n")
		leia(n2)
		escreva("Operacao:\n")
		leia(operacao)

		se (operacao == '+'){
			soma()
		}senao se(operacao == '-'){
			subtracao()
		}
		senao{
			escreva("\n Operador Invalido")
		}
		

	}

	funcao soma (){
		real resultadoSoma
		resultadoSoma = n1 + n2
		escreva("Soma: ", resultadoSoma, "\n")
		
	}

	funcao subtracao(){
		resultado = n1 - n2
		escreva("Subtracao: ", resultado)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 433; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */