"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function () {
    var avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500.123123
    };
    var printAvenger = function (_a) {
        var ironman = _a.ironman, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvenger(avengers);
    var avengersArr = ['Cap. América', true, 150.15];
    var capitan = avengersArr[0], ironman = avengersArr[1], seriaUnNumero = avengersArr[2];
    console.log({ ironman: ironman, capitan: capitan });
})();
(function () {
    var ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit'
    };
    var captainAmerica = {
        name: 'Capitán América',
        weapon: 'Escudo'
    };
    var thor = {
        name: 'Thor',
        weapon: 'Mjolnir'
    };
    var avengers = [ironman, thor, captainAmerica];
    for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
        var avenger = avengers_1[_i];
        console.log(avenger.name, avenger.weapon);
    }
})();
(function () {
    var nombre = 'Fernando';
    var getName = function () {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map