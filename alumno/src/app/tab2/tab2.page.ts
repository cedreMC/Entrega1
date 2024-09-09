import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  asignatura:string="";
  docente:string="";
  sala:string="";
  fecha: string = "";
  seccion: string ="";

  constructor(private menu:MenuController,
    private alertcontroller: AlertController,
    private router: Router,
    private menucontroller: MenuController) {}

    logout() {
      this.router.navigate(['/comienzo']);
    }

    ngOnInit() {
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
    

  //fin metodo
  
  limpiar(){
    this.docente="";
    this.sala="";
    this.fecha="";
    this.asignatura="";
    this.seccion="";
  }

  mostrarMenu(){
    this.menucontroller.open('first');
  }
}
