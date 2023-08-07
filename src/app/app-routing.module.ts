import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavigationCardComponent } from './components/navigation-card/navigation-card.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TicketExpandedComponent } from './components/ticket-expanded/ticket-expanded.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthedUserGuard } from './guards/authed-user.guard';

const routes: Routes = [
  {path: 'dashboard', component: NavigationCardComponent, canActivate: [AuthedUserGuard]},
  {path: 'login', component: LoginFormComponent},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthedUserGuard]},
  {path: 'tickets', component: TicketsComponent, canActivate: [AuthedUserGuard]},
  {path: 'tickets/:ticketid', component: TicketExpandedComponent, canActivate: [AuthedUserGuard]},
  {path: 'create-ticket', component: CreateTicketComponent, canActivate: [AuthedUserGuard]},
  {path: '**', redirectTo: 'login'},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
