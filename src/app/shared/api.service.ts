import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseURL='https://61c7190090318500175472f2.mockapi.io/';
  constructor(private http:HttpClient) { }

  get(url:string)
  {
    return this.http.get<any>(this.baseURL+url).pipe(map((res:any)=>{
      return res;
    }))
  }

  post(url:string,data:any)
  {
    return this.http.post<any>(this.baseURL+url,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  delete(url:string)
  {
    return this.http.delete<any>(this.baseURL+url).pipe(map((res:any)=>{
      return res;
    }))
  }
  update(url:string,data:any)
  {
    return this.http.put<any>(this.baseURL+url,data).pipe(map((res:any)=>{
      return res;
    }))
  }
}
