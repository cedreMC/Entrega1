import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comienzo',
  templateUrl: './comienzo.page.html',
  styleUrls: ['./comienzo.page.scss'],
})
export class ComienzoPage implements OnInit {

  con:string="";
  email:string="";

  constructor(private alertcontroller: AlertController,
              private router: Router) { }


    registro(){
      this.router.navigate(['/registro']);
    }

    goTab1() {
    this.router.navigate(['/tabs']);
  }
  ngOnInit() {
  }

  async mostrarMensaje(){
    const alert = await this.alertcontroller.create({
      header: 'Confirmación!',
      message:'Gracias por contactarse con nosotros! '+ this.email,
      mode:'ios',
      buttons: [
      {
          text: 'OK',
          role: 'confirm',
          handler: () => {
            console.log('Datos enviados');
            this.router.navigate(['/inicio']);
            this.limpiar();
          },
        },
      ],
    });
    await alert.present();
    }//finMetodo

    limpiar(){
      this.con="";
      this.email="";
    }
}
