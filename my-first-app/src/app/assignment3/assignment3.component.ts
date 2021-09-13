import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment3',
  templateUrl: './assignment3.component.html',
  styleUrls: ['./assignment3.component.css']
})
export class Assignment3Component implements OnInit {
  password = 'password';
  buttonWording = 'Display Details';
  display = false;
  buttonClick = 0;
  clicks = [];

  constructor() { }

  ngOnInit(): void {
  }

  showDetails() {
    this.buttonWording = this.buttonWording === 'Display Details' ? 'Hide Details' : 'Display Details';
    this.display = !this.display;
    this.clicks.push(this.buttonClick += 1);
  }

}
