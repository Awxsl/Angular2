import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationCardComponent } from './components/navigation-card/navigation-card.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TicketExpandedComponent } from './components/ticket-expanded/ticket-expanded.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  {path: 'dashboard', component: NavigationCardComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'tickets', component: TicketsComponent},
  {path: 'tickets/:ticketid', component: TicketExpandedComponent},
  {path: 'create-ticket', component: CreateTicketComponent},
  {path: '**', redirectTo: 'login'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
