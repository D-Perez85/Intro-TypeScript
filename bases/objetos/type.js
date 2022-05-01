"use strict";
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
