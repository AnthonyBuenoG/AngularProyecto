import {ApiResponse} from '@Models/Response';
export type GetTiendasResponse = ApiResponse<GetTiendasResponseData>;

interface GetTiendasResponseData {
    data: TiendaModel[];
}
  
export interface TiendaModel {
    Id: number;
    Nombre: string;
}