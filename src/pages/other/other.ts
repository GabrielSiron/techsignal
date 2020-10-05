import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'other-page',
  templateUrl: 'other.html'
})

export class MyClass {

    items: Array<{title: string, note: string}>;
    nome: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {  
      this.items = [];
      this.items.push({
      title: 'First Text',
      note: 'This is my first text. I\'m learning about Ionic!'})

    }
    
}