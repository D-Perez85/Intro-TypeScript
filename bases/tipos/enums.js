"use strict";
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
