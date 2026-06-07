package com.madensystems.crud_api.service;

import com.madensystems.crud_api.entity.Proveedor;
import com.madensystems.crud_api.repository.ProveedorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProveedorServiceImpl implements ProveedorService {

    @Autowired
    private ProveedorRepository proveedorRepository;

    @Override
    public Proveedor saveProveedor(Proveedor proveedor) {
        return proveedorRepository.save(proveedor);
    }

    @Override
    public Proveedor updateProveedor(Proveedor proveedor) {
        return proveedorRepository.save(proveedor);
    }

    @Override
    public List<Proveedor> getProveedores() {
        return proveedorRepository.findAll();
    }

    @Override
    public Optional<Proveedor> getProveedorById(Long id) {
        return proveedorRepository.findById(id);
    }

    @Override
    public void deleteProveedor(Long id) {
        proveedorRepository.deleteById(id);
    }
}