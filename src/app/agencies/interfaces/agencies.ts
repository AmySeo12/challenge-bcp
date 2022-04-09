export interface IAgenciesResponse {
    agencia: string,
    distrito: string,
    provincia: string,
    departamento: string,
    direccion: string,
    lat: number,
    lon: number
}

export interface IAgencies {
    agencia: string,
    distrito: string,
    provincia: string,
    departamento: string,
    direccion: string,
    lat: number,
    lon: number,
    favorite: boolean,
    id: number
}

class Agency {
    agencia: string;
    distrito: string;
    provincia: string;
    departamento: string;
    direccion: string;
    lat: number;
    lon: number;
    favorite: boolean;
    id: number;

    constructor(agencies: IAgenciesResponse, index: number) {
        this.agencia = agencies.agencia || '';
        this.distrito = agencies.distrito || '';
        this.provincia = agencies.provincia || '';
        this.departamento = agencies.departamento || '';
        this.direccion = agencies.direccion || '';
        this.lat = agencies.lat || 0;
        this.lon = agencies.lon || 0;
        this.favorite = false;
        this.id = index;
    }
}

export class Agencies {
    agency: IAgencies[];

    constructor(agencies: IAgenciesResponse[]) {
        this.agency = agencies.map((a, index) => new Agency(a, index))
    }
}