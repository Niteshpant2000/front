import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public generateToken(request: any){
    return this.http.post("backend api Url", request, {responseType : 'text' as 'json'});
  }

  public validateRequest(token: any){
    let tokenStr = 'Bearer '+token;
    const headers = new HttpHeaders().set("Authorization", tokenStr);
    return this.http.get("backend api url", {headers, responseType : 'text' as 'json'});
  }
}
