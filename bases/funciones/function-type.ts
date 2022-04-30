(()=>{

    const addNumber = (a: number, b: number) => a + b; 
    const saludar = (name: string) => `Hola ${name}`; 
    const save = () => `El mundo esta a salvo`; 

    //NUNCA DEBE SER DE TIPO ANY - ESPECIFICAR EL RETURN


    //OPCION 1
    console.log('RESULTADO 01: ----------------------------');
    let a: string;  
    a = '10'; 
    console.log(a);


    //OPCION 2
    let b: (a: number, b: number) => number;  
    b = addNumber; 
    console.log('RESULTADO 02: ----------------------------');
    console.log(b(2,3));

    //OPCION 3
    console.log('RESULTADO 03: ----------------------------');
    let c: (a: string) => string;  
    c = saludar;
    console.log(c(' Juan '));

    
    //OPCION 4
    console.log('RESULTADO 04: ----------------------------');
    let d: () =>string;  
    d = save;
    console.log(d());
    
    
    
    





})()