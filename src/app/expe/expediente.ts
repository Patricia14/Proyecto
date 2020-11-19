
export class Expediente {
    constructor(
        //public nombre_mascota: string,       
        public id_cita: number,
        public descripcion_expediente: string,
        public descripcion_cita?: string,
        public id_mascota?: number,
        public nombre_mascota?: string,
        public fecha_cita?: string,
        public id_expediente?: number,

    ) { }
}

