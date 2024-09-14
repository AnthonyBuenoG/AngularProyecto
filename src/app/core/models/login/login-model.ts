import {ApiResponse} from '@Models/Response';

export interface LoginRequest {
    Correo: string;
    Contraseña: string;
}

export type LoginResponse = ApiResponse<LoginResponseData>;

interface LoginResponseData {
    data: Data;
}
interface Data {
    Nombre: String;
    NumeroTelefono: string;
    Correo: string;
    Contrasela: string;
}
  
export interface Login {
    Id: number;
    Correo: string;
    Contraseña: string;
}