package com.madensystems.crud_api.service;

import com.madensystems.crud_api.entity.Person;

import java.util.List;
import java.util.Optional;

public interface PersonService {
    Person savePerson( Person person);
    Person updatePerson(Person person);
    List<Person> getPerson();
    Optional<Person>  getPersonById(Long  id);
    void deletePerson(Long id);

}
