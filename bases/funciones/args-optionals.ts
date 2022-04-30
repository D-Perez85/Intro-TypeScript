(()=>{

    const fullName = (firstName: string, lastName?: string) =>{
       
 
        return `${firstName} ${lastName || 'no lastname'}` 
    }
      const name = fullName('Stark'); 
      console.log({name});
    

})()