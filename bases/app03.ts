(()=>{

    type cars = {
        carroceria: string,
    modelo: string,
    antibalas: boolean, 
    pasajeros: number,
    disparar?: () => void
}
type Villano = {
    nombre: string,
    edad?: number,
    mutante: boolean
}

// Objetos
const batimovil : cars = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true, 
    pasajeros: 4
}; 

const bumblebee : cars = {
    carroceria: "Amarillo con negra",
    modelo: "4x2",
    antibalas: true, 
    pasajeros: 4,
    disparar(){
        console.log('Disparando');
    }
}; 

//Villanos
let villanos : Villano[] =[{
    nombre: 'Lex Luthor',
    edad: 54,
    mutante: false    
},
{
    nombre: 'Erik Magnus',
    edad: 49,
    mutante: true  
},
{
    nombre: 'James Logan',
    edad: undefined,
    mutante: true  
}]; 


//Multiples Tipos
type Charles ={
    poder: string,
    estatura: number
}

type Apocalipsis = {
    lider: boolean, 
    miembros: string[]
}

const charles: Charles = {
    poder: 'psiquico',
    estatura: 1.70
}; 

const apocalipsis: Apocalipsis = {
    lider: true,
    miembros: ['Magneto', 'Tormenta', 'Angel']
}; 


console.log(apocalipsis);

//Mutante debe poder ser cualquiera de los dos mutantes

let mystique: Charles | Apocalipsis; 

mystique = charles; 
mystique = apocalipsis; 

})()




