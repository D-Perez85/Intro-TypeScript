(()=>{

    class Avenger{
        private name: string;
        public team: string; 
        public realName?: string; 
        static avgAge: number = 35; 

        constructor(name: string, team: string, realName: string = "Default"){
            this.name = name, 
            this.team = team,
            this.realName = realName
        }
    }

    console.log(Avenger.avgAge);

    const antman : Avenger = new Avenger('Pedro', 'Azul'); 
    console.log(antman);
    
    

})()