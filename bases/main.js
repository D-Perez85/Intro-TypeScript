"use strict";
(() => {
    const conducirBatimovil = (auto) => {
        auto.encender = true;
        auto.velocidadMaxima = 100;
        auto.acelerar();
    };
    const batimovil = {
        encender: false,
        velocidadMaxima: 0,
        acelerar() {
            console.log("...... gogogo!!!");
        }
    };
    batimovil.acelerar();
    const guason = {
        reir: true,
        comer: true,
        llorar: false
    };
    const reir = (guason) => {
        if (guason.reir) {
            console.log("JAJAJAJA");
        }
    };
    const ciudadGotica = (ciudadanos) => {
        return ciudadanos.length;
    };
    class Persona {
        constructor(name, age, sexo, estadoCivil) { }
        imprimirBio() {
            console.log(this.name + ' ' + this.sexo);
        }
    }
    let a = new Persona('Juan', 22, 'alot', 'single');
    console.log(a);
})();
//# sourceMappingURL=main.js.map