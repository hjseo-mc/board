import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGatewayService {

  constructor(private http: HttpClient) { }

  get(url: string): Observable<any> {
    console.log('[ApiGatewayService] get(url=', url, ')')
    return this.http.get(url);
  }

  post(url: string, data: any): Observable<any>  {
    console.log('[ApiGatewayService] post(url=', url, ', data=', data, ')')
    return this.http.post(url, data);
  }

  put(url:string, data: any): Observable<any>  {
    return this.http.put(url, data);
  }

  patch(url:string, data: any): Observable<any>  {
    console.log('[ApiGatewayService] patch(url=', url, ', data=', data, ')')
    return this.http.patch(url, data);
  }

  delete(url:string): Observable<any> {
    return this.http.delete(url);
  }

}
