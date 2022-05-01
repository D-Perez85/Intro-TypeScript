namespace Validations {

   export const validateText = (texto: string): boolean=> {
        return (texto.length > 3) ? true : false
    }

   export const validateDate = (date: number): boolean =>{
        return ( isNaN (date.valueOf()) ) ? false : true; 
    }
}

console.log(Validations.validateText('abcd'));
console.log(Validations.validateDate(20));

