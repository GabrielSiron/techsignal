import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { Slides } from 'ionic-angular';

/**
 * Generated class for the SobrePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sobre',
  templateUrl: 'sobre.html',
})
export class SobrePage {
  src: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  currentSlide(n) {
    if(n == 1){
      this.src = "../../assets/imgs/mecanica.jpg";
    } else if(n == 2){
      this.src = "../../assets/imgs/automacao.jpeg";
    } else if(n == 3){
      this.src = "../../assets/imgs/mecanica.jpg"
    }

  }
  openMenu(){
    this.menuCtrl.open();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SobrePage');
  }

}
