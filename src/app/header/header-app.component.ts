import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header-app.component.html',
  styleUrls: ['./header-app.component.css']
})
export class HeaderAppComponent implements OnInit {

  @Output() toggleDisplay =  new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {
  }


  toggleDisplayFunc(option : string) {
    this.toggleDisplay.emit(option);
  }
}
