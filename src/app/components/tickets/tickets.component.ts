import { Component, OnInit } from '@angular/core';
import { Ticket } from 'Ticket';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[] = []
  constructor(private ticketService:TicketsService) { }

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((tasks) => this.tickets = tasks)
  }


}
