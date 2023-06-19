import {Inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from "rxjs";
import {EmployeeDto} from "../models/EmployeeDto/EmployeeDto";
import {UpdateEmployeeDto} from "../models/EmployeeDto/UpdateEmployeeDto";
import {AddEmployee} from "../models/EmployeeDto/AddEmployeeDto";
import {environment} from "../environment";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  apiBaseUrl=environment.apiUrl;
  constructor(private httpClient:HttpClient) {}
  getEmployee():Observable<EmployeeDto[]>{
    return this.httpClient.get<EmployeeDto[]>(this.apiBaseUrl + '/v1/Employee')
  }
  addEmployee(addEmployee: AddEmployee):Observable<EmployeeDto>{
    return this.httpClient.post<EmployeeDto>(this.apiBaseUrl + '/v1/Employee',addEmployee);
  }
  updateEmployee(id:string,updateEmployee: UpdateEmployeeDto):Observable<EmployeeDto>{
    return this.httpClient.put<EmployeeDto>(this.apiBaseUrl  + '/v1/Employee/' + id,updateEmployee);
  }
  deleteEmployee(id:string):Observable<EmployeeDto>{
    return this.httpClient.delete<EmployeeDto>(this.apiBaseUrl + '/v1/Employee/' + id);
  }
}
