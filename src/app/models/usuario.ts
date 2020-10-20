export class Usuario {
    constructor(
        public nombre_usuario: string,       
        public apellido_usuario: string,
        public correo_usuario: string,
        public password_usuario: string,
        public tipo_usuario?: string|number,
        public nombre_tipo_usuario?: string,
        public id_usuario?: number,
    ) { }
}
