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
(() => {
    function sumar(a, b) {
        return a + b;
    }
    ;
    console.log(`El resultado de la 1er funcion es: ${sumar(5, 9)}`);
    const sumar2 = (a, b) => {
        return a + b;
    };
    console.log(`El resultado de la 2da funcion es: ${sumar2(4, 8)}`);
    let contar = (heroes) => {
        return heroes.length;
    };
    let superHeros = ['Flash', 'Batman', 'Superman'];
    let result = contar(superHeros);
    console.log(result);
    const llamarArgs = (llamar) => {
        if (llamar) {
            console.log('Argumento recibido');
        }
        else {
            console.log('Argumento no recibido');
        }
    };
    llamarArgs();
    const joinHeros = (...personas) => {
        return personas.join(', ');
    };
    const uniendo = joinHeros('Padre', 'Hijo', 'Nieto');
    console.log({ uniendo });
    const noHaceNada = (nro, texto, arrays, booleano) => { };
    const tester = (a, b, c, d) => {
        console.log(`${a}`);
        console.log(`${b}`);
        console.log(`${c}`);
        console.log(`${d}`);
    };
    let a = tester(6, 'Aldo', ['Uno', 'Dos'], false);
})();
(() => {
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
    console.log(apocalipsis);
    let mystique;
    mystique = charles;
    mystique = apocalipsis;
})();
(() => {
    const fullName = (firstName, lastName, upper = false) => {
        if (upper) {
            return `${firstName} ${lastName || '---- '}`.toUpperCase();
        }
        else {
            return `${firstName} ${lastName || '---- '}`;
        }
    };
    const name = fullName('Tony', 'Stark', true);
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        return `${firstName} ${lastName || 'no lastname'}`;
    };
    const name = fullName('Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, lastName) => {
        if (!firstName) {
            throw new Error('Nombre is required');
        }
        return `${firstName} ${lastName}`;
    };
    let noName;
    const name = fullName('Tony', 'Stark');
    console.log({ name });
})();
(() => {
    const fullName = (firstName, ...rest) => {
        return `${firstName} ${rest.join(' ')}`;
    };
    const superman = fullName('Juan', 'Pablo', 'Perez');
    console.log({ superman });
})();
(() => {
    const addNumber = (a, b) => a + b;
    const saludar = (name) => `Hola ${name}`;
    const save = () => `El mundo esta a salvo`;
    console.log('RESULTADO 01: ----------------------------');
    let a;
    a = '10';
    console.log(a);
    let b;
    b = addNumber;
    console.log('RESULTADO 02: ----------------------------');
    console.log(b(2, 3));
    console.log('RESULTADO 03: ----------------------------');
    let c;
    c = saludar;
    console.log(c(' Juan '));
    console.log('RESULTADO 04: ----------------------------');
    let d;
    d = save;
    console.log(d());
})();
(() => {
    const hero = 'Batman';
    function returName() {
        return hero;
    }
    const return2 = () => {
        return 'retorno 2 listo';
    };
    console.log(typeof return2);
    const heroName = returName();
})();
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let supeman = {
        name: 'Clark Kent Alen',
        age: 42,
        powers: ['Super fuerza']
    };
})();
(() => {
    let flash = {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    };
    let superman = {
        name: 'Clark Kent Alen',
        age: 42,
        powers: ['Super fuerza'],
        getName() {
            return this.name;
        }
    };
    console.log({ superman });
})();
(() => {
    let myCustomVariable = 'Fernando';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'Juan',
        age: 29,
        powers: ['Ninguno']
    };
    console.log(typeof myCustomVariable);
})();
(() => {
    let avenger = 123;
    let exists;
    let power;
    avenger = 'Dr Strange';
    console.log(avenger.charAt(0));
    avenger = 156;
    console.log(avenger.toFixed(2));
    console.log(exists);
    console.log(power);
})();
(() => {
    const numbers = [1, 2, 3, 4, 5, 6];
    numbers.push(21);
    console.log(numbers);
    const texto = ['A', 'B', 'C'];
    numbers.forEach(v => console.log(v));
})();
(() => {
    let isSuperman = true;
    isSuperman = (isSuperman) ? true : false;
    console.log({ isSuperman });
})();
(() => {
    let AudioLevel;
    (function (AudioLevel) {
        AudioLevel[AudioLevel["min"] = 1] = "min";
        AudioLevel[AudioLevel["middle"] = 2] = "middle";
        AudioLevel[AudioLevel["middle2"] = 3] = "middle2";
        AudioLevel[AudioLevel["max"] = 8] = "max";
    })(AudioLevel || (AudioLevel = {}));
    let a = AudioLevel.middle;
    console.log(a);
    a = AudioLevel.middle2;
    console.log(a);
    console.log({ AudioLevel });
})();
(() => {
    const abc = (message) => {
        throw new Error(message);
    };
    abc('Help');
})();
(() => {
    let avengers = 10;
    console.log(avengers);
    const villians = 20;
    if (avengers < villians) {
        console.log('Problemon');
    }
    else {
        console.log('Todo Okardo');
    }
    avengers = 123;
    console.log({ avengers });
})();
(() => {
    var _a;
    const batman = 'Batman';
    const linterna = "Linterna";
    const volcan = `Heroe: Volcan Negro`;
    console.log(`Soy ${batman}`);
    console.log(batman.toUpperCase());
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'No esta pte');
})();
(() => {
    const hero = ['Superman', 100, true];
    console.log(hero);
    hero[0] = 'Batman';
    hero[1] = 22;
    hero[2] = false;
    console.log(hero);
})();
(() => {
    function callHero() {
        return;
    }
    const callHero2 = () => {
        return;
    };
    const a = callHero();
    console.log(a);
    const b = callHero2();
    console.log(b);
})();
//# sourceMappingURL=main.js.map