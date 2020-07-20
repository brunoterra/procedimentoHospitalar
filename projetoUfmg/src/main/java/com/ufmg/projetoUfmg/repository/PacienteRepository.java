package com.ufmg.projetoUfmg.repository;

import com.ufmg.projetoUfmg.model.Paciente;
import org.springframework.data.repository.CrudRepository;

public interface PacienteRepository extends CrudRepository<Paciente, Integer> {
}
