package br.com.dio.desafio.dominio;

public class Desafios extends Conteudo {

    private int quantidade;

    @Override
    public double calcularXp() {
        return XP_PADRAO * quantidade;
    }

    public Desafios() {
    }


    public int getQuantidade() {
        return quantidade;
    }

    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    @Override
    public String toString() {
        return "Desafio{" +
                "titulo='" + getTitulo() + '\'' +
                ", descricao='" + getDescricao() + '\'' +
                ", cargaHoraria=" + quantidade +
                '}';
    }
}
