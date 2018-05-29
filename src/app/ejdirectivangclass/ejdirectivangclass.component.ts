import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangclass',
  templateUrl: './ejdirectivangclass.component.html',
  styleUrls: ['./ejdirectivangclass.component.css']
})
export class EjdirectivangclassComponent implements OnInit {

  //declare a variable to hold class name:
  public my_Class = 'style1';

  puntuacion: number;

  constructor() { }

  ngOnInit() {
  }

  //function to change the class from style1 to style 2 when clicked
  toggle_class(){
    if(this.my_Class=="style1"){
        this.my_Class='style2';
    }else{
        this.my_Class='style1';
    }
}

}
