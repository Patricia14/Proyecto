import { Time } from '@angular/common';

export class Cita {
    constructor(
        //public nombre_mascota: string,       
        
        public descripcion_cita: string,
        public id_cliente: number,
        public fecha_cita?: Date,
        public hora_cita?: Time,
        public id_cita?: number

    ) { }
}

