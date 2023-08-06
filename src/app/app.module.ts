import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationCardComponent } from './components/navigation-card/navigation-card.component';
import { CreateTicketComponent } from './components/create-ticket/create-ticket.component';
import { TicketsComponent } from './components/tickets/tickets.component';
import { TicketItemComponent } from './components/ticket-item/ticket-item.component';
import { TicketExpandedComponent } from './components/ticket-expanded/ticket-expanded.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UserAuthModule } from './modules/user-auth/user-auth.module';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    CardComponent,
    HeaderComponent,
    FooterComponent,
    NavigationCardComponent,
    CreateTicketComponent,
    TicketsComponent,
    TicketItemComponent,
    TicketExpandedComponent, 
    LoginFormComponent, NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
