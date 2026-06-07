package com.madensystems.crud_api.controller;

import com.madensystems.crud_api.entity.Venta;
import com.madensystems.crud_api.service.VentaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ventas")
public class VentaController {
@Autowired
private VentaService ventaService;

// Crear venta
@PostMapping
public ResponseEntity<Venta> saveVenta(@RequestBody Venta venta) {
    try {
        Venta saveVenta = ventaService.saveVenta(venta);
        return new ResponseEntity<>(saveVenta, HttpStatus.CREATED);
    } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}

// Actualizar venta
@PutMapping("/{id}")
public ResponseEntity<Venta> updateVenta(@PathVariable Long id, @RequestBody Venta venta) {
    try {
        venta.setIdVenta(id);  // Sin intValue()
        Venta updateVenta = ventaService.updateVenta(venta);
        return new ResponseEntity<>(updateVenta, HttpStatus.OK);
    } catch (Exception e) {
        return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }
}

// Obtener todas las ventas
@GetMapping
public ResponseEntity<List<Venta>> getAllVenta() {
    return new ResponseEntity<>(ventaService.getVentas(), HttpStatus.OK);
}

// Buscar venta por ID
@GetMapping("/{id}")
public ResponseEntity<Venta> getById(@PathVariable Long id) {
    Optional<Venta> venta = ventaService.getVentaById(id);  // Sin intValue()
    return venta.map(value -> new ResponseEntity<>(value, HttpStatus.OK))
            .orElseGet(() -> new ResponseEntity<>(HttpStatus.NOT_FOUND));
}

// Eliminar venta
@DeleteMapping("/{id}")
public ResponseEntity<Void> deleteVenta(@PathVariable Long id) {
    Optional<Venta> venta = ventaService.getVentaById(id);  // Sin intValue()
    if (venta.isPresent()) {
        ventaService.deleteVenta(id);  // Uso directo de id
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } else {
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
}

