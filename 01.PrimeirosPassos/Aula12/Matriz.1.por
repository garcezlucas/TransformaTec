programa
{
	inclua biblioteca Util
	
	funcao inicio()
	{
		inteiro matriz [3] [4]
		inteiro linha, coluna

		para(linha = 0; linha < 3; linha++){
			
			para(coluna = 0; coluna < 4; coluna++){

				escreva ("\nInforme o número para a posição: [", linha, "][", coluna, "]: ")
				leia(matriz[linha][coluna])
				
			}
			
		}

		limpa()
		
		para(linha = 0; linha < 3; linha++){
			
			para(coluna = 0; coluna < 4; coluna++){

				escreva(matriz[linha][coluna], " ")
				
							
			}

			escreva("\n")
			
		}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 417; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */