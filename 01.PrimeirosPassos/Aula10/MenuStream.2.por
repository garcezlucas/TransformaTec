programa
{

	funcao cadeia menu(inteiro op){

		cadeia pro

		escolha(op){
			caso 1:
				pro = "Netflix"
				pare
			caso 2:
				pro = "HBO MAX"
				pare
			caso 3:
				pro = "Amazon Prime"
				pare
			caso 4:
				pro = "Tele Cine"
				pare
			caso contrario:
				pro = "Inválido" 
				pare
		}



		retorne pro
	}
	funcao inicio()
	{
		inteiro opcao
		cadeia nome, provedor 

		escreva("\nBem vindo ao nosso serviço de Streaming DIO Transformatec", "\nSelecione um dos nossos provedores!", "\n1 - Netflix", "\n2 - HBO MAX", "\n3 - Amazon Prime", "\n4 - Tele Cine")
		leia(opcao)

		provedor = menu(opcao)

		se(provedor != "Inválido"){
			escreva("\nExcelente escolha ", nome, " Você escolheu o provedor de Streaming ", provedor, " Aproveite!")
			}
		senao {
			escreva("\nDesculpe ", nome, ", sua opção é inválida")
		
	}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 332; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */