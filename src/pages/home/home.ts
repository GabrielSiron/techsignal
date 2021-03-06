import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { CursoPage } from '../curso/curso';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  nome: string;
  cargo: string;
  videos: string[];
  canalVerde: any;
  canalAzul: any;

  

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      this.nome = "LocalHost";
      this.cargo = "SuperAdmin";
      this.menuCtrl.enable(true); 
      this.canalVerde = 0;
      this.canalAzul = 125;
  }

  openMenu(){
    this.menuCtrl.open();
  }
  cad(){
    this.navCtrl.push(CursoPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

}
