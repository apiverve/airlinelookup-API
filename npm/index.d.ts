declare module '@apiverve/airlinelookup' {
  export interface airlinelookupOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface airlinelookupResponse {
    status: string;
    error: string | null;
    data: AirlineLookupData;
    code?: number;
  }


  interface AirlineLookupData {
      name:     string;
      alias:    string;
      iata:     string;
      icao:     string;
      callsign: string;
      country:  string;
  }

  export default class airlinelookupWrapper {
    constructor(options: airlinelookupOptions);

    execute(callback: (error: any, data: airlinelookupResponse | null) => void): Promise<airlinelookupResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: airlinelookupResponse | null) => void): Promise<airlinelookupResponse>;
    execute(query?: Record<string, any>): Promise<airlinelookupResponse>;
  }
}
