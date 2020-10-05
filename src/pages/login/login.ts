import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../app/app.component';
import { Cadastro} from '../cadastro/cadastro';

@Component({
  selector: 'other-page',
  templateUrl: 'login.html'
})

export class Login {

  estado: string;
  estadobool: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.estado = "password";
    this.estadobool = true;  
  } 
    
    logIn(login, senha) {
          if(login == 'Gabriel' && senha == 'minhasenha'){
            this.navCtrl.push(MyApp);
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
