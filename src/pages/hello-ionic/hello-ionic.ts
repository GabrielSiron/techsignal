import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { Cadastro } from '../cadastro/cadastro';
import { Login } from '../login/login';

@Component({
  selector: 'hello-ionic',
  templateUrl: 'hello-ionic.html'
})

export class HelloIonicPage {
  constructor(public NavCtrl: NavController, public NavParams: NavParams) {
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