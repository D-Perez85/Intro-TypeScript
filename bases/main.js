"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName = "Default") {
            this.name = name,
                this.team = team,
                this.realName = realName;
        }
    }
    Avenger.avgAge = 35;
    console.log(Avenger.avgAge);
    const antman = new Avenger('Pedro', 'Azul');
    console.log(antman);
})();
//# sourceMappingURL=main.js.map