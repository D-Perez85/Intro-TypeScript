(()=>{

    enum AudioLevel {
    //Valen segun la posicion del array ( 0 , 1 , 2 )
        min = 1, 
        middle, 
        middle2, 
        max = 8
    }
    let a = AudioLevel.middle; 
    console.log(a); // 2
    a = AudioLevel.middle2; 
    console.log(a); // 3
    console.log({AudioLevel});
    

    
})()
