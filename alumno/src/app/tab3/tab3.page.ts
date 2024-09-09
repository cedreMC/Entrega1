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
  fecha: string = "";
  justificacion: string = '';
  seccion:string="";

  constructor(
    private alertcontroller: AlertController,
    private router: Router,
    private menucontroller: MenuController) {}

  logout() {
    this.router.navigate(['/comienzo']);
  }

  async mensaje() {
    const alert = await this.alertcontroller.create({
      header: 'Éxito',
      cssClass:'alertamensaje',
      message: 'Justificación enviada con éxito',
      buttons: ['OK']
    });

    await alert.present();
  }

  limpiar(){

    this.fecha="";
    this.asignatura="";
    this.justificacion="";
    this.seccion="";
  }
  mostrarMenu(){
    this.menucontroller.open('first');
  }
}
