export class Mascota {
    constructor(
        public nombre_mascota: string,       
        public edad_mascota: number,
        public raza_mascota: string,
        public id_usuario: number,
        public id_mascota?: number,
        public id_cliente?:number,
        public nombre_usuario?: string,
  
    ) { }

}
