package com.madensystems.crud_api.service;

import com.madensystems.crud_api.entity.Venta;

import java.util.List;
import java.util.Optional;

public interface VentaService {
    Venta saveVenta(Venta venta);
    Venta updateVenta(Venta venta);
    List<Venta> getVentas();
    Optional<Venta> getVentaById(Long id);
    void deleteVenta(Long id);
}
