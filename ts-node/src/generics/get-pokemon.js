var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "axios"], function (require, exports, axios_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getpokemon = void 0;
    axios_1 = __importDefault(axios_1);
    const getpokemon = async (id) => {
        const res = await axios_1.default.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        // console.log(res.data.abilities[0].ability.name);
        return res.data;
    };
    exports.getpokemon = getpokemon;
});
