import {ApiResponse} from '@Models/Response';

export interface PersonInsertRequest {
    Id: number;
    IdUsuario: number;
    Nombre: string;
    ApPaterno: string;
    ApMaterno: string;
    Perfil: number;
    IdSede: number;
    NombreUsuario?: string | null;
    NombreSede?: string | null;
    Usuario?: number;
    Activo?: number;
    Porcentaje: number;
}

export type GetPersonasResponse = ApiResponse<GetPersonasResponseData>;

interface GetPersonasResponseData {
    data: PersonaModel[];
}
  
export interface PersonaModel {
    Id: number;
    IdUsuario: number;
    Nombre: string;
    ApPaterno: string;
    ApMaterno: string;
    Perfil: number;
    IdSede: number;
    NombreUsuario: string;
    NombreSede: string;
    Usuario: number;
    Activo: number;
    Porcentaje: number;
}