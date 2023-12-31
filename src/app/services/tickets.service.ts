import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Ticket } from '../../../Ticket';


const headerOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TicketsService {
  apiUrl = 'http://localhost:5000/tickets'

  constructor(private http:HttpClient) { }

  getTickets(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(this.apiUrl)
  }

  getTicket(id: number): Observable<Ticket> {
    return this.http.get<Ticket>(`${this.apiUrl}/${id}`)
  }

  addTicket(ticket: Ticket) {
    this.http.post(this.apiUrl, ticket, headerOptions).subscribe(() => console.log('added'))
  }
}
