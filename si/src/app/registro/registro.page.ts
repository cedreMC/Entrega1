import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nom:string="";
  carre:string="";
  email:string="";
  num:string="";
  dire:string="";
  con:string="";

  constructor(private alertcontroller: AlertController,
    private router: Router) { }

  ngOnInit() {
  }


  goTab1() {
    this.router.navigate(['/tabs']);
  }
}
