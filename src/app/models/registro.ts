export class Registro {
    
    public Id: number;
    public name: string;
    public apellido: string;
    public pwd: string;
    public email: string;
    public tipo: string;

    constructor(Id: number, name: string, apellido: string, pwd: string, email: string, tipo: string) {
        this.Id = Id;
        this.name = name;
        this.apellido = apellido;
        this.pwd = pwd;
        this.email = email;
        this.tipo = tipo;
    }
}
