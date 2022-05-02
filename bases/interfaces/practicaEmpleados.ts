(()=>{ //INTERFAZ COMPLETA PARA TIPO DE JUGADORES DE FUTOL

    interface Empleado {
        id: number,
        nombre: string,
        apellido: string,
        edad: number, 
        legajo: number,
        ubicacion: Ubicacion,
        puesto: Puesto,
        sueldo: Sueldo,
        domicilio: Domicilio,
        getFullAddres(id: number): string,
    }

    interface Ubicacion {
        pais: string,
        ciudad: string,
        codigoPostal: number
    }

    interface Domicilio{
        calle: string, 
        numero: number,
        zona: string,
        barrio?: string,
    }

    interface Puesto{
        sector: string,
        sucursal: string,
        area: string,
        antiguedad: number,        
    }

    interface Sueldo {
        basico: number,
        puntualidad?: number,
        bonos: boolean,
        adicional_Plus: boolean
    }

    const empleado : Empleado  = {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 30,
        legajo: 18745,
        ubicacion:{
            pais: 'Argentina',
            ciudad: 'Neuquen',
            codigoPostal: 8300
        },
        domicilio: {
            calle: 'Las Rosas',
            numero: 1234,
            zona: 'Centro'
        },
        puesto:{
            sector: 'Oil & Gas',
            sucursal: 'Neuquén',
            area: 'Predictivo',
            antiguedad: 15
        },
        sueldo:{
            basico: 51000,
            puntualidad: 8550,
            bonos: true,
            adicional_Plus: true
        }, 
        getFullAddres (id: number){
            return `${this.domicilio.calle} ${this.domicilio.numero} -- Zona:${this.domicilio.zona}`; 
        }
    }

    const empleado2 : Empleado = {
        id: 2,
        nombre: 'Ariel',
        apellido: 'Bras',
        edad: 41,
        legajo: 803,
        ubicacion:{
            pais: 'Argentina',
            ciudad: 'Comodoro',
            codigoPostal: 9050
        },
        domicilio: {
            calle: 'Lamadrid',
            numero: 4456,
            zona: 'Sur'
        },
        puesto:{
            sector: 'Oil & Gas',
            sucursal: 'Comodoro',
            area: 'Supervision',
            antiguedad: 17
        },
        sueldo: {
            basico: 54128,
            adicional_Plus: false,
            bonos: true
        },
        getFullAddres (id: number){
            return `${this.domicilio.calle} ${this.domicilio.numero} -- Zona:${this.domicilio.zona}`; 
        }

    }

    console.log(empleado);
    console.log(empleado.getFullAddres(1));
    
    console.log(empleado2);
    console.log(empleado2.getFullAddres(2));

    




})()


