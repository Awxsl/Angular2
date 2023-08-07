import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'User';

const headerOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'http://localhost:5000/users'

  

  constructor(private http:HttpClient) { }

  

  async getUser(id: string) {
    try {
      const data = await this.http.get(`${this.apiUrl}/${id}`).toPromise() 
      return {status: 200, data}
    } catch (error) {
      return {status: 400, error}
    }
  }

  // async updateUser(user:User) {
  //   try {
  //     const id = localStorage.getItem('username')
  //     await this.http.put(`${this.apiUrl}/${id}`, user, headerOptions).toPromise()
  //     localStorage.setItem('username', user.id)
  //     return {status: 200}
  //   } catch (error) {
  //     return {status: 400, errorMessage: error}
  //   }
  // }
}
