(()=>{

//Basic functions
function sumar(a: number, b: number): number {
return a+b
}; 
console.log(`El resultado de la 1er funcion es: ${sumar(5,9)}`);

//Same exercise with arrow function
const sumar2 = (a: number, b: number): number =>{
    return a + b; 
}
console.log(`El resultado de la 2da funcion es: ${sumar2(4,8)}`);

// -----------------------------------------------------------------------

let contar = (heroes: string []): number =>{
    return heroes.length; 
}
let superHeros = ['Flash', 'Batman', 'Superman']; 
let result = contar(superHeros); 
console.log(result);

// -----------------------------------------------------------------------

//Default Params
const llamarArgs = (llamar?: string): void => {
    if(llamar){
        console.log('Argumento recibido');
    }else{
        console.log('Argumento no recibido');
    }
}
llamarArgs(); 


// -----------------------------------------------------------------------

//Rest
const joinHeros = (...personas:string[]): string =>{
    return personas.join(', '); 
}

const uniendo = joinHeros('Padre', 'Hijo', 'Nieto')
console.log({uniendo});

// -----------------------------------------------------------------------

//Tipo Function
const noHaceNada = (nro: number, texto: string, arrays: string[], booleano: boolean)=>{}; 

//Crear el tipo de function que acepte la fn anterior.
const tester = (a: number, b?: string, c?: string[], d?: boolean) =>{
    console.log(`${a}`);
    console.log(`${b}`);
    console.log(`${c}`);
    console.log(`${d}`);
}
let a = tester(6, 'Aldo', ['Uno', 'Dos'], false); 

})()


