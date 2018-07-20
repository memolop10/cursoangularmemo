import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  nombre = 'El guapo';

  visible :boolean=false;

  cars:any[] = [
    'de paletas','de hot dogs','de camotes'
  ]

    autos:any[] = [
      {id:1,nombre:'hot dogs',total:0,colores:['azul','verde','gris']},
      {id:2,nombre:'de paletas',total:2,colores:['azul','verde','negro']}
      //{id:}
    ]

}
