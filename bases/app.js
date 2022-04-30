"use strict";
(() => {
    //Tipos
    const batman = 'bruce';
    const superman = 'clark';
    const exist = false;
    //Tuplas
    const heroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    //Arreglos
    const aliados = ['WorderWoman', 'Acuaman', 'Sam'];
    //Enums
    let strong;
    (function (strong) {
        strong[strong["aquaman"] = 0] = "aquaman";
        strong[strong["batman"] = 1] = "batman";
        strong[strong["flash"] = 5] = "flash";
        strong[strong["superman"] = 100] = "superman";
    })(strong || (strong = {}));
    const fuerzaAcuaman = strong.aquaman;
    const fuerzaBatman = strong.batman;
    const fuerzaFlash = strong.flash;
    const fuerzaSuperman = strong.superman;
    //Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio');
    }
    //Aserciones de tipo
    const poder = '100';
    const largoPoder = poder.length;
    console.log(largoPoder);
})();
