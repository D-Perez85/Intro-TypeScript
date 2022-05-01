"use strict";
var Validations;
(function (Validations) {
    Validations.validateText = (texto) => {
        return (texto.length > 3) ? true : false;
    };
    Validations.validateDate = (date) => {
        return (isNaN(date.valueOf())) ? false : true;
    };
})(Validations || (Validations = {}));
console.log(Validations.validateText('abcd'));
console.log(Validations.validateDate(20));
//# sourceMappingURL=main.js.map