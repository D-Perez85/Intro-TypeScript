"use strict";
// Objetos
const batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
const bumblebee = {
    carroceria: "Amarillo con negra",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar() {
        console.log('Disparando');
    }
};
//Villanos
let villanos = [{
        nombre: 'Lex Luthor',
        edad: 54,
        mutante: false
    },
    {
        nombre: 'Erik Magnus',
        edad: 49,
        mutante: true
    },
    {
        nombre: 'James Logan',
        edad: undefined,
        mutante: true
    }];
const charles = {
    poder: 'psiquico',
    estatura: 1.70
};
const apocalipsis = {
    lider: true,
    miembros: ['Magneto', 'Tormenta', 'Angel']
};
//Mutante debe poder ser cualquiera de los dos mutantes
let mystique;
mystique = charles;
mystique = apocalipsis;
