package com.madensystems.crud_api.controller;

import com.madensystems.crud_api.entity.Proveedor;
import com.madensystems.crud_api.service.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/proveedores")
public class ProveedorController {

    @Autowired
    private ProveedorService proveedorService;

    // Crear proveedor
    @PostMapping
    public ResponseEntity<Proveedor> saveProveedor(@RequestBody Proveedor proveedor) {
        try {
            Proveedor saveProveedor = proveedorService.saveProveedor(proveedor);
            return new ResponseEntity<>(saveProveedor, HttpStatus.CREATED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Actualizar proveedor
    @PutMapping("/{id}")
    public ResponseEntity<Proveedor> updateProveedor(@PathVariable Long id, @RequestBody Proveedor proveedor) {
        try {
            proveedor.setId(id);
            Proveedor updateProveedor = proveedorService.updateProveedor(proveedor);
            return new ResponseEntity<>(updateProveedor, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }

    // Obtener todos los proveedores
    @GetMapping
    public ResponseEntity<List<Proveedor>> getAllProveedor() {
        return new ResponseEntity<>(proveedorService.getProveedores(), HttpStatus.OK);
    }

    // Buscar proveedor por ID
    @GetMapping("/{id}")
    public ResponseEntity<Proveedor> getById(@PathVariable Long id) {
        Optional<Proveedor> proveedor = proveedorService.getProveedorById(id);
        return proveedor.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
                .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    // Eliminar proveedor
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProveedor(@PathVariable Long id) {
        Optional<Proveedor> proveedor = proveedorService.getProveedorById(id);
        if (proveedor.isPresent()) {
            proveedorService.deleteProveedor(proveedor.get().getId());
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }
}