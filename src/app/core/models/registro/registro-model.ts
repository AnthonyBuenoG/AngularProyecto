import {ApiResponse} from '@Models/Response';

export interface RegistroRequest {
    Nombres: string;
    NumeroTelefono: string;
    Correo: string;
    Contraseña: string;
}

export type RegistroResponse = ApiResponse<RegistroResponseData>;

interface RegistroResponseData {
    data: Data;
    token: string;
}
interface Data {
    Nombres: String;
    NumeroTelefono: string;
    Correo: string;
    Contrasela: string;


}export interface RegistroInsertRequest {
    Nombres: string;
    NumeroTelefono: string;
    Correo: string;
    Contraseña: string;
}
  
export interface RegistroModel {
    Nombres: string;
    NumeroTelefono: string;
    Correo: string;
    Contraseña: string;
}