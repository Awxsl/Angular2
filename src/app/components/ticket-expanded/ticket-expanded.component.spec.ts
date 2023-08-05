import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketExpandedComponent } from './ticket-expanded.component';

describe('TicketExpandedComponent', () => {
  let component: TicketExpandedComponent;
  let fixture: ComponentFixture<TicketExpandedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketExpandedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketExpandedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
