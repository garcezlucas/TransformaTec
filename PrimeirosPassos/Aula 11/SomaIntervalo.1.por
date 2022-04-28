programa
{
	inclua biblioteca Util
	
	funcao inicio()
	{
		inteiro init, final, soma = 0
		//init = 1
		//final =10

		escreva("Informe o número de inicio: ")
		leia(init)
		limpa()
		
		escreva("Informe o número de fim: ")
		leia(final)
		limpa()

		enquanto(init <= final){
			
			soma = soma + init
			escreva("A soma atual é: ", soma)

			init++

			Util.aguarde(1500)

			limpa()
		}

		escreva("A soma do intervalo entre os números é: ", soma)
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 389; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */