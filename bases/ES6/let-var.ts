(() => {

    //LA IMPORTANCIA DE PONER CONST EN CADA FUNCION
    const nombre: string = 'Fernando'
    const getName = (): void => {
        console.log('viejo getName');
    }

    // getName = () => { console.log('Nuevo getName') }; //NO SE PUEDE ASIGNAR A GETNAME PORQUE ES UNA CONSTANTE
    // getName()

})()