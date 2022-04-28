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

		escreva("\nInforme a frequência do aluno: ")
		leia(freq)

		media = (nota1 + nota2 + nota3 + nota4) / 4

		se(media >= corte e freq >= frequencia){
			escreva("\nAluno aprovado com a média: ", media, " e frequência de: ", freq, " %")	
		}senao se(media >= 4 e freq >= 60){
			escreva("\nAluno está de exame com a média: ", media, " e frequência de: ", freq, " %")
		}senao{
			escreva("\nAluno reprovado com a média: ", media, " e frequência de: ",freq, " %")
		}
	}
}

/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 800; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */