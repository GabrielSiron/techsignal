import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cadastro} from '../cadastro/cadastro';
import { from } from 'rxjs/observable/from';
import { directive } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'other-page',
  templateUrl: 'login.html',
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
      logIn(login, senha) {

        console.log(login);
          if(login == 'password'){
            this.navCtrl.push(HomePage);
          }
    };

      cad(){
        this.navCtrl.push(Cadastro);
      }
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
