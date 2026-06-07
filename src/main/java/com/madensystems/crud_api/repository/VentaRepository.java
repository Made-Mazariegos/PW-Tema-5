package com.madensystems.crud_api.repository;

import com.madensystems.crud_api.entity.Venta;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface VentaRepository extends JpaRepository<Venta, Long>{
}
