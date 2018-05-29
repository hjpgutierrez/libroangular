import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-ejpipes",
  templateUrl: "./ejpipes.component.html",
  styles: []
})
export class EjpipesComponent implements OnInit {
  hoy = new Date();
  ciudad: string = "Barranquilla";
  resultado: number = 1.148;
  dolareuro: number = 0.94;

  nombre: string = "Henry";
  sexo: string = "hombre";
  encabezamiento: any = { hombre: "Estimado", mujer: "Estimada" };

  constructor() {}

  ngOnInit() {}
}
