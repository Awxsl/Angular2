import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-card',
  templateUrl: './navigation-card.component.html',
  styleUrls: ['./navigation-card.component.css']
})
export class NavigationCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log(localStorage.getItem('username'));
  }

  onFAQ() {
    
  }

  onViewTickets() {

  }
  
  onCreateTicket() {

  }

}
