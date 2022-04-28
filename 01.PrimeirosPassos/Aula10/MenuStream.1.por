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
		inteiro opcao = 0
		cadeia nome, provedor = ""

		escreva("\nBem vindo ao nosso serviço de Streaming DIO Transformatec\n")
		escreva("\nPor Favor, informe seu nome!\n")
		leia(nome)
		
		escreva("\nMuito bem ", nome, ", Selecione um dos nossos provedores!\n")
		escreva("\n1 - Netflix\n")
		escreva("\n2 - HBO MAX\n")
		escreva("\n3 - Amazon Prime\n")
		escreva("\n4 - Tele Cine\n")
		escreva("\nSua opção: ")
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
 * @POSICAO-CURSOR = 944; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */