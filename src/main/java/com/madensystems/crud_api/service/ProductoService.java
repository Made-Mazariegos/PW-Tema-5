package com.madensystems.crud_api.service;

import com.madensystems.crud_api.entity.Producto;

import java.util.List;
import java.util.Optional;

public interface ProductoService {
    Producto saveProducto(Producto producto);
    Producto updateProducto(Producto producto);
    List<Producto> getProductos();   //
    Optional<Producto> getProductoById(Long id);
    void deleteProducto(Long id);
}

