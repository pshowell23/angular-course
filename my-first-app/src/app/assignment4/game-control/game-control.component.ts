import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counts:number[] = [];
  count = 0;
  clicked = false;
  counting;

  constructor() { }

  ngOnInit(): void {
  }

  startGame(){
    this.clickedToggle()
    this.counting = setInterval(() => {
      this.count += 1;
      this.counts.push(this.count);
      console.log(this.count);
    }, 1000)
  }

  endGame() {
    this.clickedToggle();
    clearInterval(this.counting);
    console.log("Game Stopped");
  }

  counter() {
    this.count += 1;
    console.log(this.count);
  }

  clickedToggle(){
    this.clicked = !this.clicked
  }
}
