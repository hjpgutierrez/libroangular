import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fechaactual',
  template: ` 
                <p> Barranquilla, {{ hoy | date:'d/M/y H:m'}}</p>               
                <app-copyright></app-copyright>
            ` ,
  styles: []
})
export class FechaactualComponent implements OnInit {

  hoy: any = new Date();

  constructor() { }

  ngOnInit() {
  }

}
