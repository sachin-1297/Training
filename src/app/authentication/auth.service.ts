import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
const serverUrl = environment.serverUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl = serverUrl + '/userMgmt'

  constructor(private _http: HttpClient) { }

  login(data: any) {
    return this._http.post(this.apiUrl + '/users/login', data);
  }

}