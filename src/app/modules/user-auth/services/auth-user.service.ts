import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { User } from 'User';

@Injectable({
  providedIn: 'root',
})
export class AuthUserService {
  apiUrl = 'http://localhost:5000/users';

  constructor(private http: HttpClient, private router:Router) {}

  async isRegisteredUser(user: User) {
    try {
      const result = await this.http.get<User>(`${this.apiUrl}/${user.id}`).toPromise().then(data => data.password === user.password)
      if(result) {
        localStorage.setItem('username', user.password)
        this.router.navigate(['../dashboard'])
      }
      return true
    } catch (error) {
      console.log(false);
      return false
    } 
  }
}
