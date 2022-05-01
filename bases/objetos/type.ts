(()=>{
    
    type Hero = {
        name: string, 
        age?: number, 
        powers: string[], 
        getName?:()=> string
    }

    let flash: Hero =  {
        name: 'Barry Alen',
        age: 24,
        powers: ['Super velocidad', 'Viajar en el tiempo']
    }


    let superman : Hero =  {
        name: 'Clark Kent Alen',
        age: 42,
        powers: ['Super fuerza'],
        getName(){
            return this.name; 
        }
    }
    
    console.log({superman});
    

})()