(()=>{

    const hero: [string, number, boolean] = ['Superman', 100, true]; 

    // hero[0] = 59;  //No te deja por la posicion - admite String
    // hero[1] = 'Prueba'; //No te deja por la posicion - admite Number
    // hero[2] = 123;  //No te deja por la posicion - admite booleanos

    console.log(hero);

    hero[0] = 'Batman'; 
    hero[1] = 22; 
    hero[2] = false;  

    console.log(hero);
    

})()