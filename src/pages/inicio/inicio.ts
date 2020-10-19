import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Cadastro } from '../cadastro/cadastro';
import { Login } from '../login/login';

@Component({
  selector: 'inicio',
  templateUrl: 'inicio.html'
})

export class Inicio {
  src: string;
  constructor(public NavCtrl: NavController, public NavParams: NavParams) {
    this.src = "../assets/imgs/novalogo.png";
  }

  onLogin(event, item) {
    this.NavCtrl.push(Login, {
    item: item}
    );
  }

  onCadastro(event, item) {
    this.NavCtrl.push(Cadastro, {
    item: item }
    );
  }
}
