import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirecivangif',
  templateUrl: './ejdirecivangif.component.html',
  styles: []
})
export class EjdirecivangifComponent implements OnInit {

  capital: string;
  
  constructor() { }

  ngOnInit() { }

  setResultado() { return this.capital === "Madrid" ? true : false; }

}
