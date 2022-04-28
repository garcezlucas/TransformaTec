programa
{
	real nota1, nota2, nota3, nota4, media, freq
	const real corte = 6.0
	const real frequencia = 70.0
	
	funcao inicio()
	{
	
		escreva("\nInforme a nota 1: ")
		leia(nota1)
		escreva("\nInforme a nota 2: ")
		leia(nota2)
		escreva("\nInforme a nota 3: ")
		leia(nota3)
		escreva("\nInforme a nota 4: ")
		leia(nota4)

		escreva("\nInforme a frequencia do aluno: ")
		leia (freq)

		media = (nota1 + nota2 + nota3 + nota4) / 4

		escreva("\nA média foi: ", media, "\n")

		se(media >= corte e freq >= frequencia){
			escreva("\nAluno Aprovado")
		}
		senao{
			escreva("\nAluno Reprovado")
		}

		

	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 613; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */