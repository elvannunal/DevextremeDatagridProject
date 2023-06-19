import { Injectable } from '@angular/core';
import {environment} from "../environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CountryBaseDto} from "../models/CountryDto/CountryBaseDto";
import {AddCountry} from "../models/CountryDto/AddCountry";
import {UpdateCountry} from "../models/CountryDto/UpdateContry";
@Injectable({
  providedIn: 'root'
})
export class CountryService {
  apiBaseUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) {}

  getCountry():Observable<CountryBaseDto[]>{
    return this.httpClient.get<CountryBaseDto[]>(this.apiBaseUrl + '/v1/Country');
  }
  addCountry(addCountry:AddCountry):Observable<CountryBaseDto>{
    return this.httpClient.post<CountryBaseDto>(this.apiBaseUrl + '/v1/Country',addCountry);
  }
  updateCountry(id:string,updateCountry: UpdateCountry):Observable<CountryBaseDto>{
    return this.httpClient.put<CountryBaseDto>(this.apiBaseUrl  + '/v1/Country/' + id,updateCountry);
  }
  deleteCountry(id:string):Observable<UpdateCountry>{
    return this.httpClient.delete<UpdateCountry>(this.apiBaseUrl + 'api/Country/' + id);
  }
}
