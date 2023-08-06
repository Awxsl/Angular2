import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationCardComponent } from './components/navigation-card/navigation-card.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { ButtonComponent } from './components/button/button.component';
import { TicketExpandedComponent } from './components/ticket-expanded/ticket-expanded.component';

const routes: Routes = [
  {path: '', component: NavigationCardComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'tickets/:ticketid', component: TicketExpandedComponent},
  {path: 'create-ticket', component: CreateTicketComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
