import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
url="http://localhost:3333/"
  constructor(private http: HttpClient) { }

  //       Login
  login(data){
    return this.http.post(this.url+'login',data);
  }
}
