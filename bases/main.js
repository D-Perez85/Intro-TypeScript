"use strict";
(() => {
    class Avenger {
        constructor(name, team, realName) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
        static getAvgAge() {
            return this.avgAge;
        }
        bio() {
            return `${this.name} ${this.team}`;
        }
    }
    Avenger.avgAge = 35;
    const antman = new Avenger('Aquaman', 'Azul', 'Jhon Doe');
    console.log(antman);
    console.log(antman.bio());
    console.log(Avenger.getAvgAge());
})();
//# sourceMappingURL=main.js.map