import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CadastroPage} from './../cadastro/cadastro';
import { from } from 'rxjs/observable/from';
import { directive } from '@angular/core/src/render3/instructions';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'other-page',
  templateUrl: 'login.html',
})

export class LoginPage {

  login: string[];
  estado: string;
  estadobool: boolean;
  src: string;
  aux: string;
  constructor(public formBuilder: FormBuilder, public navCtrl: NavController, public navParams: NavParams) {
    this.estado = "password";
    this.estadobool = true;
    this.aux = 'a';
    this.src = "../assets/imgs/novalogo.png";

  }
      logIn(login, senha) {
        this.aux = login;
        console.log(login);
        this.navCtrl.push(HomePage);

    };

      cad(){
        this.navCtrl.push(CadastroPage);
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
