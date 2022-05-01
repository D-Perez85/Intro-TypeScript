(()=>{

    class Avenger{
        static avgAge: number = 35; 
        static getAvgAge() {
            return this.avgAge;
        }
         //FORMA CORTA DE PASAR PARAMETROS
        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string, 
        ){}
        public bio(){
            return `${this.name} ${this.team}`
        }
    }
    const antman : Avenger = new Avenger('Aquaman', 'Azul', 'Jhon Doe'); 
    // console.log(antman);
    // console.log(antman.bio());
    // console.log( Avenger.getAvgAge() )
})()

