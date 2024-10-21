import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token = '123'

  constructor() { }

  isAuth(){
    console.log(this.token.length > 0);
    return this.token.length > 0
  }
}
