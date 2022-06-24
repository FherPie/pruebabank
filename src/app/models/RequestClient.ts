import { Cuenta } from "./cuenta.model";

export class RequestClient {
    clienteId?:number;
    persona: {
      edad?: number;
      email?: string;
      direccion?: string;
      genero?: string;
      identificacion?: string;
      nombre?: string;
      apellido?: string;
      telefono?: string;
    } 
    estado?: string;
    password?: string;
    cuenta:Cuenta;
  }
