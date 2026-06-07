package com.madensystems.crud_api.service;

import com.madensystems.crud_api.entity.Proveedor;
import java.util.List;
import java.util.Optional;

public interface ProveedorService {
    Proveedor saveProveedor(Proveedor proveedor);
    Proveedor updateProveedor(Proveedor proveedor);
    List<Proveedor> getProveedores();   // ojo con el nombre
    Optional<Proveedor> getProveedorById(Long id);
    void deleteProveedor(Long id);
}