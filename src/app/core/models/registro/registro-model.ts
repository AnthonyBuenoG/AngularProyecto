import {ApiResponse} from '@Models/Response';

export interface RegistroRequest {
    Correo: string;
    Contraseña: string;
}

export type RegistroResponse = ApiResponse<RegistroResponseData>;

interface RegistroResponseData {
    data: Data;
}
interface Data {
    Correo: string;
    Contrasela: string;

}

export interface RegistroModel {
    Correo: string;
    Contraseña: string;
}


export interface RegistroInsertRequest {
   
    Correo: string;
    Contraseña: string;
}
  