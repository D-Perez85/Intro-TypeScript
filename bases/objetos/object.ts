(()=>{

    let flash : {name: string, age?: number, powers: string[], getName?:()=> string} =  {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: "Superman",
        // age: 26,
        powers: ['Super fuerza'],
        getName(){
            return this.name
        }
    }

    console.log(flash.getName());
    
    
})()