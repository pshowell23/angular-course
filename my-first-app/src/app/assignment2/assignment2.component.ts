import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment2',
  templateUrl: './assignment2.component.html',
  styleUrls: ['./assignment2.component.css']
})
export class Assignment2Component implements OnInit {
  username = '';
  emptyUsername = true;

  constructor() { }

  ngOnInit(): void {
  }

  isUserEmpty(event:Event) {
    this.emptyUsername = this.username != '' ? false : true
  }

  submitUser() {
    this.username = '';
    this.emptyUsername = true;
  }

}
