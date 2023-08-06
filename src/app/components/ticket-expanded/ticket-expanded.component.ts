import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Ticket } from 'Ticket';
import { TicketsService } from 'src/app/services/tickets.service';


@Component({
  selector: 'app-ticket-expanded',
  templateUrl: './ticket-expanded.component.html',
  styleUrls: ['./ticket-expanded.component.css']
})
export class TicketExpandedComponent implements OnInit {
  ticketInfo!: Ticket
  ticketid = this.route.snapshot.params.ticketid
  
  constructor(private route:ActivatedRoute, private ticketsService: TicketsService) { }
  
  ngOnInit(): void {
    this.ticketsService.getTicket(this.ticketid).subscribe((ticket) => this.ticketInfo = ticket)
  }
  
}
