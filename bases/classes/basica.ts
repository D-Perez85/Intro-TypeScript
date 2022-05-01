(()=>{

    class Avenger{
        //FORMA CORTA DE PASAR PARAMETROS
        constructor( 
            private name: string, 
            private team: string, 
            public realName?: string
        ){}
    }
    const antman : Avenger = new Avenger('Aquaman', 'Azul', 'Jhon Doe'); 
    console.log(antman);
    
    

})()