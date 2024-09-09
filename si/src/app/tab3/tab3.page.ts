import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  asignatura:string="";
  seccion:string="";
  sala:string="";
  fecha: string = "";

  constructor(private router: Router,
              private alertcontroller: AlertController,
              private menu:MenuController,
              private menucontroller: MenuController
  ) {}

  logout() {
    this.router.navigate(['/comienzo']);
  }

  async mensaje() {
    const alert = await this.alertcontroller.create({
      header: '¿Esta seguro?',
      mode: 'ios',
      cssClass: 'xd-alerta',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Alerta cancelada');
          },
        },
        {
          text: 'Si',
          role: 'confirm',
          handler: () => {
            console.log('Confirmado');
            this.router.navigate(['/qr']);
            this.limpiar();
          },
        },
      ],
    });
  
    await alert.present();
  }

  limpiar(){
    this.seccion="";
    this.sala="";
    this.fecha="";
    this.asignatura="";
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }
}
