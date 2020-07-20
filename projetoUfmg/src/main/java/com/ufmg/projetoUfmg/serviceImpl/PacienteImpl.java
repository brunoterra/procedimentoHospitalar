package com.ufmg.projetoUfmg.serviceImpl;

import com.ufmg.projetoUfmg.model.Paciente;
import com.ufmg.projetoUfmg.repository.PacienteRepository;
import com.ufmg.projetoUfmg.serviceInterface.PacienteInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class PacienteImpl implements PacienteInterface {
    @Autowired
    private PacienteRepository pacienteRepository;
    @Override
    public void save(Paciente paciente) {
        pacienteRepository.save(paciente);
    }

    @Override
    public Paciente update(Paciente paciente) {
        return pacienteRepository.save(paciente);
    }

    @Override
    public void delete(int id) {
        pacienteRepository.deleteById(id);
    }

    @Override
    public List<Paciente> getAll() {
        return (List<Paciente>) pacienteRepository.findAll();
    }
}
