package com.madensystems.crud_api.entity;

import jakarta.persistence.*;


    @Entity
    @Table(name = "proveedores")
    public class Proveedor {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Column(nullable = false, length = 100)
        private String nombre;

        @Column(nullable = false, length = 20)
        private String telefono;

        @Column(nullable = false, length = 200)
        private String direccion;

        // 🔹 Constructores
        public Proveedor() {}

        public Proveedor(String nombre, String telefono, String direccion) {
            this.nombre = nombre;
            this.telefono = telefono;
            this.direccion = direccion;
        }

        // 🔹 Getters y Setters
        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getTelefono() {
            return telefono;
        }

        public void setTelefono(String telefono) {
            this.telefono = telefono;
        }

        public String getDireccion() {
            return direccion;
        }

        public void setDireccion(String direccion) {
            this.direccion = direccion;
        }
    }

