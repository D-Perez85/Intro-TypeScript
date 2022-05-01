"use strict";
(() => {
    const batman = 'bruce';
    const superman = 'clark';
    const exist = false;
    const heroes = [batman, superman];
    const villano = ['Lex Lutor', 5, true];
    const aliados = ['WorderWoman', 'Acuaman', 'Sam'];
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
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio');
    }
    const poder = '100';
    const largoPoder = poder.length;
    console.log(largoPoder);
    console.log('Desde aca');
})();
//# sourceMappingURL=app.js.map