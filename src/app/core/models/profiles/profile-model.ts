import {ApiResponse} from '@Models/Response';

export type GetPerfilesResponse = ApiResponse<GetPerflesResponseData>;

interface GetPerflesResponseData {
    data: PerfilModel[];
}
  
export interface PerfilModel {
    Id: number;
    Nombre: string;
}