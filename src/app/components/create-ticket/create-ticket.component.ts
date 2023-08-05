import { Component, OnInit } from '@angular/core';
import { TicketsService } from 'src/app/services/tickets.service';

@Component({
  selector: 'app-create-ticket',
  templateUrl: './create-ticket.component.html',
  styleUrls: ['./create-ticket.component.css']
})
export class CreateTicketComponent implements OnInit {
  title: string = ''
  description: string = ''
  isOpen: boolean = true
  priority: number = 1

  constructor(private ticketService:TicketsService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.title || !this.description) {
      alert('Fill all fields')
      return 
    }

    const ticket = {
      title: this.title, 
      description: this.description, 
      priority: this.priority, 
      isOpen: this.isOpen
    }

    this.ticketService.addTicket(ticket)
    this.title = ''
    this.description = ''
    // console.log(`${this.title} ${this.description} `)
  }

}
