
(()=>{

    const hero : string = 'Batman'; 

    function returName(): string{
        return hero; 
    }

    const return2 = (): string =>{
        return 'retorno 2 listo'
    }

    console.log(typeof return2);
    
    const heroName = returName(); 

})()