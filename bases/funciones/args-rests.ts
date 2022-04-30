(()=>{

const fullName = (firstName: string,...rest: string[]): string => {
    return `${firstName} ${rest.join(' ')}`
}

const superman = fullName('Juan','Pablo','Perez'); 
console.log({superman});


})()