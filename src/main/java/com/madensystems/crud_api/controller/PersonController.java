package com.madensystems.crud_api.controller;

import com.madensystems.crud_api.entity.Person;
import com.madensystems.crud_api.service.PersonServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/persons")
public class PersonController {
    @Autowired
    PersonServiceImpl personServiceImpl;

    @PostMapping
    public ResponseEntity<Person> savePerson(@RequestBody Person person) {
        try {
            Person savePerson = personServiceImpl.savePerson(person);
            return new ResponseEntity<>(savePerson, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }


    @PutMapping
    public ResponseEntity<Person> updatePerson(@RequestBody Person person) {
        try {
            Person updatePerson = personServiceImpl.updatePerson(person);
            return new ResponseEntity<>(updatePerson, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping
    public ResponseEntity<List<Person>> getAllPersons() {
        return new ResponseEntity<>(personServiceImpl.getPerson(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Person> getById(@PathVariable Long id) {
        Optional<Person> Person = personServiceImpl.getPersonById(id);
        return Person.map(value -> new ResponseEntity<>(value, HttpStatus.OK)).orElseGet(() ->
                new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePerson(@PathVariable Long id) {
        Optional<Person> person = personServiceImpl.getPersonById(id);
        if (person.isPresent()) {
            personServiceImpl.deletePerson(person.get().getId());
            return new ResponseEntity<>(HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}
