import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { VideoPage } from '../video/video';
/**
 * Generated class for the CursoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-curso',
  templateUrl: 'curso.html',
})
export class CursoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
  }

  openMenu(){
    this.menuCtrl.open();
  }

  cad(){
    this.navCtrl.push(VideoPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CursoPage');
  }

}
