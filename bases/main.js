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
})();
(() => {
    class Avenger {
        constructor(name, realName) {
            this.name = name;
            this.realName = realName;
            console.log("Constructor Avenger llamado!");
        }
        getFullname() {
            return `${this.name} ${this.realName}`;
        }
    }
    class Xmen extends Avenger {
        constructor(name, realName, isMutant) {
            super(name, realName);
            this.isMutant = isMutant;
            console.log("Constructor Xmen llamado");
        }
        get fullName() {
            return `${this.name} - ${this.realName}`;
        }
        set fullName(name) {
            if (name.length < 3) {
                throw new Error("EL nombre debe de ser mayor de 3 letras");
            }
            this.name = name;
        }
        getFullnameDesdeXmen() {
            console.log(super.getFullname());
        }
    }
    const wolverine = new Xmen("Wolverine", "Logan", true);
    wolverine.fullName = "Test";
    console.log(wolverine.fullName);
    wolverine.getFullnameDesdeXmen();
})();
//# sourceMappingURL=main.js.map