package com.ufmg.projetoUfmg.model;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Paciente {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue
    private int id;
    private String nome;
    private String sexo;
    private String endereco;
    private Date nascimento;
    private String hospital;
    private String motivo;

    public Paciente() {
        super();
    }

    public Paciente(int id, String nome, String sexo, String endereco, Date nascimento, String hospital, String motivo) {
        super();
        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.endereco = endereco;
        this.nascimento = nascimento;
        this.hospital = hospital;
        this.motivo = motivo;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getSexo() {
        return sexo;
    }

    public void setSexo(String sexo) {
        this.sexo = sexo;
    }

    public String getEndereco() {
        return endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public Date getNascimento() {
        return nascimento;
    }

    public void setNascimento(Date nascimento) {
        this.nascimento = nascimento;
    }

    public String getHospital() {
        return hospital;
    }

    public void setHospital(String hospital) {
        this.hospital = hospital;
    }

    public String getMotivo() {
        return motivo;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }
}
