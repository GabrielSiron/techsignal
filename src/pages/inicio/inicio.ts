import { Component } from '@angular/core';

import { MenuController, NavController, NavParams } from 'ionic-angular';

import { CadastroPage } from './../cadastro/cadastro';
import { LoginPage } from './../login/login';

@Component({
  selector: 'inicio',
  templateUrl: 'inicio.html'
})

export class InicioPage {
  src: string;
  constructor(public menuCtrl: MenuController, public NavCtrl: NavController, public NavParams: NavParams) {
    this.src = "../assets/imgs/novalogo.png";
    this.menuCtrl.enable(false); 
  }

  onLogin(event, item) {
    this.NavCtrl.push(LoginPage, {
    item: item}
    );
  }

  onCadastro(event, item) {
    this.NavCtrl.push(CadastroPage, {
    item: item }
    );
  }
}
