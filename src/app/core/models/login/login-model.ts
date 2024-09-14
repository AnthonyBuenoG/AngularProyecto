import {ApiResponse} from '@Models/Response';

export interface LoginRequest {
    Nombres: string;
    NumeroTelefono: string;
    Correo: string;
    Contraseña: string;
}

export type LoginResponse = ApiResponse<LoginResponseData>;

interface LoginResponseData {
    data: Data;
}
interface Data {
    Nombres: String;
    NumeroTelefono: string;
    Correo: string;
    Contrasela: string;


}export interface LoginInsertRequest {
    Nombres: string;
    NumeroTelefono: string;
    Correo: string;
    Contraseña: string;
}
  
export interface LoginModel {
    Nombres: string;
    NumeroTelefono: string;
    Correo: string;
    Contraseña: string;
}