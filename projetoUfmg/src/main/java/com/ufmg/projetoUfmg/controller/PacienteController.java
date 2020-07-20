package com.ufmg.projetoUfmg.controller;

import com.ufmg.projetoUfmg.model.Paciente;
import com.ufmg.projetoUfmg.serviceImpl.PacienteImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/paciente")
@CrossOrigin("*")
public class PacienteController {
    @Autowired
    private PacienteImpl pctImpl;

    @PostMapping(value ="save")
    public Paciente addNewSave(@RequestBody Paciente paciente){
        System.out.println("Salvo com sucesso");
        pctImpl.save(paciente);
        return paciente;
    }

    @PutMapping(value = "update")
    public Paciente updatePaci(@RequestBody Paciente paciente){
        return pctImpl.update(paciente);
    }

    @DeleteMapping(value = "delete")
    public String deletePaci(@RequestParam int id) {
        pctImpl.delete(id);
        return "Removido com sucesso!";
    }

    @GetMapping(value = "getAll")
    public List<Paciente> findAllPaciente(){
        return pctImpl.getAll();
    }
}
