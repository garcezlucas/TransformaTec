programa
{
	
	funcao inicio()
	{
		inteiro idade

		escreva("\n Informe a sua idade: ")
		leia(idade)

		se(idade < 0){
		
			escreva("\nIdade inválida!")
		
		}senao se(idade < 18){

			escreva("\nMenor de idade!")
			
		}senao se(idade >= 18 e idade < 65){

			escreva("\nAdulto!")
		
		}senao{
			
			escreva("\nIdoso!")
		
		}
		
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 339; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */