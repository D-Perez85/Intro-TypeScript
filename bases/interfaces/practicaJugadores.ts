(()=>{ //INTERFAZ COMPLETA PARA TIPO DE JUGADORES DE FUTOL

    interface Jugador {
            name: string,
            puesto: string,
            age: number,
            club: Clubs, 
            paises?: Paises
     }

    interface Clubs {
        primero: {
            pais: string,
            ciudad: string,
            nombre: string,
            duracion: number
        },
        segundo?: {
            pais: string,
            ciudad: string,
            nombre: string,
            duracion: number
        },
        tercero?: {
            pais: string,
            ciudad: string,
            nombre: string,
            duracion: number
        }
        cuarto?: {
            pais: string,
            ciudad: string,
            nombre: string,
            duracion: number
        }

    }

    interface Paises {
        origen: {
            name: string,
            ciudad: string
        },
        actual: {
            name: string,
            ciudad: string
        }
    }
  
    const Player : Jugador = {
            name: 'Lionel Messi',
            puesto: 'Delantero',
            age: 35,
            club : {
                primero:{
                    pais: 'Argentina',
                    ciudad: 'Rosario',
                    nombre: 'NOB',
                    duracion: 2
                },
                segundo: 
                {
                    pais: 'España',
                    ciudad: 'Barcelona',
                    nombre: 'Barcelona FC',
                    duracion: 14
                }, 
                tercero:  {
                    pais: 'Francia',
                    ciudad: 'Paris',
                    nombre: 'PSG',
                    duracion: 2
                }
            },
            paises: {
                origen: {
                    name: 'Argentina',
                    ciudad: 'Rosario'
                },
                actual: {
                    name: 'Francia',
                    ciudad: 'Paris'
                }
            }
    }

    const Player2: Jugador  = {
        name: 'Angel di Maria',
        puesto: 'Delantero',
        age: 32,
        club: {
            primero: {
                pais: 'Argentina',
                ciudad: 'Rosario',
                nombre: 'Rosario Central',
                duracion: 4
            },
            segundo: {
                pais: 'España',
                ciudad: 'Madrir',
                nombre: 'Real Madrid',
                duracion: 9
            }

        },
        paises: {
            origen: {
                name: 'Argentina',
                ciudad: 'Rosario'
            },
            actual: {
                name: 'Fracia',
                ciudad: 'Paris'
            }
        }
    }

    const Player3: Jugador ={
        name: 'Roman Riquelme',
        puesto: 'Volante',
        age: 40,
        club:{
            primero: {
                pais: 'Argentina',
                ciudad: 'Buenos Aires',
                nombre: 'Argentinos Jrs',
                duracion: 1
            },
            segundo: {
                pais: 'Argentina',
                ciudad: 'Buenos Aires',
                nombre: 'Boca Jrs',
                duracion: 13
            }
        },
        paises:{
            origen:{
                name: 'Argentina',
                ciudad: 'Buenos Aires'
            },
            actual:{
                name: 'Argentina',
                ciudad: 'Cordoba'
            }
        }
    }

    console.log(Player);
    console.log(Player2);
    console.log(Player3);
    
})()


