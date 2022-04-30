(()=>{

    const fullName = (firstName: string, lastName: string) =>{
       
        if(!firstName){
            throw new Error('Nombre is required')
        }

        return `${firstName} ${lastName}`
    }
    let noName : any; 
    // const name = fullName(noName, 'Stark');  //error de validacion anterior
    const name = fullName('Tony', 'Stark'); 
    console.log({name});
    

})()