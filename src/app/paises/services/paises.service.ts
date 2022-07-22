import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { CountryResponse } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  API: string = "https://restcountries.com/v3.1";


  getCountry(pais : string): Observable<CountryResponse []> {
    return this.http.get<CountryResponse[]>(`${this.API}/name/${pais}`);
  }

  getRegion(region : string) : Observable<CountryResponse []>{
    return this.http.get<CountryResponse[]>(`${this.API}/region/${region}`);
  }

  getCapital(capital : string) : Observable<CountryResponse []>{
    return this.http.get<CountryResponse[]>(`${this.API}/capital/${capital}`)
  }

  getCurrency(currency : string ): Observable<CountryResponse []> {
    return this.http.get<CountryResponse[]>(`${this.API}/currency/${currency}`);
  }

  getLenguage(lenguage : string ): Observable<CountryResponse []> {
    return this.http.get<CountryResponse[]>(`${this.API}/lang/${lenguage}`);
  }


  getCodeId(id : number): Observable<CountryResponse []> {  //special
    return this.http.get<CountryResponse []>(`${this.API}/alpha/${id}`);
  }



  constructor(private http: HttpClient) { }
}
