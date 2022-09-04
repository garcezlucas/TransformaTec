package com.aula124.project.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

//Definição de classe de entidade - tabela
@Entity
@Table(name = "phone_tb")
public class Phone {
    
    //Chave primária da tabela
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "ddi", nullable = false)
    private Integer ddi;

    @Column(name = "ddd", nullable = false)
    private Integer ddd;

    @Column(name = "pnumber", nullable = false)
    private String number;

    //Definição do relacionamento muitos para um entre telefone e contato - um contato tem muitos telefones
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="c_id", nullable = false)
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Contact contact;

    public Phone() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getDdi() {
        return ddi;
    }

    public void setDdi(Integer ddi) {
        this.ddi = ddi;
    }

    public Integer getDdd() {
        return ddd;
    }

    public void setDdd(Integer ddd) {
        this.ddd = ddd;
    }

    public String getNumber() {
        return number;
    }

    public void setNumber(String number) {
        this.number = number;
    }


}