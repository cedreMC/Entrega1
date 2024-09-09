import { Component } from '@angular/core';

interface Menu{
  icon:string;
  redirecTo: string;
  name:string;
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  menu:Menu[]=[
    {
      icon:'exit-outline',
      redirecTo: '/comienzo',
      name:'Cerrar la sesión'
    },
    {
      icon:'person-circle-outline',
      redirecTo: '/perfil',
      name:'Perfil'
    },
    
  ]


  constructor() {}
}
