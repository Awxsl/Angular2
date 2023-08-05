import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() btnLabel: string = 'Click'
  @Input() color: string = '#000'
  @Input() textColor: string = '#fff'
  @Output() onButtonClick = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.onButtonClick.emit()
  }

}
