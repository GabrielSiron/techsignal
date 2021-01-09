import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { isBreakStatement } from 'typescript';
import { ChangePasswordPage } from '../change-password/change-password';
/**
 * Generated class for the ContaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conta',
  templateUrl: 'conta.html',
})
export class ContaPage {
  email: string;
  nome: string;
  newemail: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
    this.email = "gabrielsiron.menezes@gmail.com";
    this.nome = "Gabriel Siron";
    this.newemail = "";
    for(let i: number = 0; i < this.email.length; i++){
      if(i < 3){
        this.newemail += this.email[i];
      } else if(this.email[i] == "@"){
        for(let j: number = i; j < this.email.length; j++){
          this.newemail += this.email[j];
        }    
        break;
      } else {
        this.newemail += "*";
      }
    }
  }
  openMenu(){
    this.menuCtrl.open();
  }
  changePassword(){
    this.navCtrl.push(ChangePasswordPage);
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ContaPage');
  }

}
