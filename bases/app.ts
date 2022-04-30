
(() =>{

    //Tipos

    const batman: string = 'bruce'; 
    const superman: string = 'clark'

    const exist: boolean  = false; 

    //Tuplas
    const heroes: [string, string] = [batman,superman]; 
    const villano: [string, number, boolean] = ['Lex Lutor', 5, true]; 

    //Arreglos
    const aliados: (string)[] = ['WorderWoman', 'Acuaman', 'Sam']; 

    //Enums
    enum strong{
         aquaman  = 0, 
         batman = 1, 
         flash = 5, 
         superman = 100,
    }
    const fuerzaAcuaman = strong.aquaman;  
    const fuerzaBatman = strong.batman;
    const fuerzaFlash = strong.flash; 
    const fuerzaSuperman = strong.superman; 

    
    //Retorno de funciones

    function activar_batiseñal(): string{
        return 'activada'; 
    }

    function pedir_ayuda(): void{
        console.log('Auxilio');
    }

    //Aserciones de tipo
    const poder: any = '100'; 
    const largoPoder : number = (poder as string).length; 
    console.log(largoPoder);
    console.log('Desde aca');
    
    
})()

