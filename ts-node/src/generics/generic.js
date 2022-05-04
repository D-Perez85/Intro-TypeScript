define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.genericArrowFn = exports.genericFn = exports.printObject = void 0;
    const printObject = (args) => {
        console.log(args);
    };
    exports.printObject = printObject;
    function genericFn(args) {
        return args;
    }
    exports.genericFn = genericFn;
    const genericArrowFn = (args) => {
        return args;
    };
    exports.genericArrowFn = genericArrowFn;
});
