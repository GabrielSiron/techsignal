import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'other-page',
    templateUrl: 'cadastro.html'
  })

  export class CadastroPage {
    erro: string;
    estado: string;
    estadobool: boolean;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.estado = "password";
        this.estadobool = true;
    }
    
    cadastro(login, senha1, senha2){
        if(senha1 != senha2){
            this.erro = "Senhas Não Coincidem.";
        } else {
            this.erro = "Cadastro Não Realizado por motivos de preguiça do programador";
        }
    }

    mostraSenha(){
        if(this.estadobool){
            this.estado = "text";
            this.estadobool = false;
        } else {
            this.estado = "password";
            this.estadobool = true;
        }
    }
}