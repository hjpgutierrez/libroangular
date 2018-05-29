import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styles: []
})
export class EjdirectivangstyleComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit() { }

  setColor() { return this.puntuacion > 5 ? 'green' : this.puntuacion === 5 ? 'yellow' : 'red'; }

  setFondo() { return this.puntuacion >= 5 ? 'white' : 'black'; }

  //set a property that holds a random color for our style.
  randomcolor = this.getRandomColor();

  //function to get random colors
  public getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  //function to set a new random color
  seterColor() {
    this.randomcolor = this.getRandomColor();
  }

}
