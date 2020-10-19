import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cadastro} from '../cadastro/cadastro';

@Component({
  selector: 'other-page',
  templateUrl: 'login.html'
})

export class Login {

  login: string[];
  estado: string;
  estadobool: boolean;
  src: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estado = "password";
    this.estadobool = true;
    this.src = "../assets/imgs/novalogo.png";
  }
      logIn(login = "", senha = "", value = "") {
          if(value == "cadastro"){
            this.navCtrl.push(Cadastro);
          }
          if(login == 'localhost' && senha == 'password'){
            this.navCtrl.push(HomePage);
          } else {
            this.navCtrl.push(Cadastro);
          }
    };

    mostraSenha(){
        if(this.estadobool){
          this.estado = "text";
          this.estadobool = false;
        } else {
          this.estado = "password";
          this.estadobool = true;
        }
    };

}
