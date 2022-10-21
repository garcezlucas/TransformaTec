package br.com.dio.desafio.dominio;

public class Forum extends Conteudo{

    private int interacoes;
    private int stars;

    @Override
    public double calcularXp() {
        double inter = XP_PADRAO * interacoes;
        double star = XP_PADRAO * stars;
        double XP_PADRAO = inter + star;
        return XP_PADRAO;
    }

    public Forum() {
    }


    public int getInteracoes() {
        return interacoes;
    }

    public void setInteracoes(int interacoes) {
        this.interacoes = interacoes;
    }

    public int getStars() {
        return stars;
    }

    public void setStars(int stars) {
        this.stars = stars;
    }

    @Override
    public String toString() {
        return "Forum{" +
                "titulo='" + getTitulo() + '\'' +
                ", descricao='" + getDescricao() + '\'' +
                ", interações=" + interacoes +
                ", curtidas=" + stars +
                '}';
    }
}

