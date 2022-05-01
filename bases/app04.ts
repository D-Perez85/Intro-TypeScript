(()=>{

//----------------------------------------------------------------------------------------------------------
// Cree una interfaz para validar el auto (el valor enviado por parametro)
interface Auto {
    encender: boolean, 
    velocidadMaxima: number,
    acelerar(): void; 
}

  const conducirBatimovil = ( auto: Auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }
  
  const batimovil: Auto = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
      console.log("...... gogogo!!!");
    }
  }
  batimovil.acelerar();  

//----------------------------------------------------------------------------------------------------------
// Cree una interfaz con que permita utilizar el siguiente objeto utilizando propiedades opcionales
 
interface Guason {
    reir?: boolean,
    comer?: boolean,
    llorar?: boolean
}

const guason: Guason = {
    reir: true,
    comer:true,
    llorar:false
  }
//   console.log(guason);
  
  
const reir = ( guason: Guason ):void => {
      if( guason.reir ){
          console.log("JAJAJAJA");
        }
    }
  // reir(guason);  
  
//----------------------------------------------------------------------------------------------------------
// Cree una interfaz para la siguiente funcion

interface CiudadGotica {
    (ciudadanos: string[]) : number
}

  const ciudadGotica : CiudadGotica = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }

//   const personas = [ 'Juan', 'Pedro', 'Maria'];  
//   let result  = ciudadGotica(personas)
//   console.log(result);
 

//----------------------------------------------------------------------------------------------------------
// Cree una interfaz que obligue crear una clase con las siguientes propiedades y metodos
//  propiedades:  - nombre - edad - sexo - estadoCivil - imprimirBio(): void // en consola una breve descripcion.

  interface Persona {
      name: string,
      edad: number,
      sexo?: string,
      estadoCivil?: string,
      imprimirBio?(): void; 
  }


  class Persona implements Persona{
      constructor( 
          name: string, 
          age: number, 
          sexo?: string, 
          estadoCivil?: string
          ){}
          imprimirBio? (){
              console.log (this.name + ' ' + this.sexo); 
          } 
    }

    let a = new Persona('Juan', 22, 'alot', 'single')
    console.log(a);
})()