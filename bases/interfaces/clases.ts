(()=> {

    interface Xmen {
        name: string;
        realName: string;
        mutantPower?( id: number ):string;
    }

    interface Human {
        age: number;
    }

    class Mutant implements Xmen, Human {
        constructor(

            public age: number,
            public name: string,
            public realName: string,
            ){}
        
        mutantPower( id: number ) {
            return this.name + ' ' + this.realName;
        }
    }
    
    let a = new Mutant(22, 'Logan', 'Relogan')
    // console.log(a);
    // console.log(a.mutantPower(1));
    
    
})()

