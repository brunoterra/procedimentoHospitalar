package com.ufmg.projetoUfmg.serviceInterface;

import com.ufmg.projetoUfmg.model.Paciente;
import java.util.List;

public interface PacienteInterface {
    public void save(Paciente paciente);
    public Paciente update(Paciente paciente);
    public void delete(int id);
    public List<Paciente> getAll();
}
