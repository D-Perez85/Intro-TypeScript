define(["require", "exports", "./generics/get-pokemon"], function (require, exports, get_pokemon_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (0, get_pokemon_1.getpokemon)(4)
        .then(value => console.log(value.sprites.front_default))
        .catch(error => console.log(error))
        .finally(() => console.log('Fin del pokesistem'));
});
