import { InicioPage } from './../pages/inicio/inicio';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { CursoPage } from '../pages/curso/curso';
import { MeuscursosPage } from '../pages/meuscursos/meuscursos';
import { SobrePage } from '../pages/sobre/sobre';
import { ContaPage } from '../pages/conta/conta';
import { ChangePasswordPage } from '../pages/change-password/change-password';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    LoginPage,
    CadastroPage,
    HomePage,
    CursoPage,
    MeuscursosPage,
    SobrePage,
    ContaPage,
    ChangePasswordPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    LoginPage,
    CadastroPage,
    HomePage,
    CursoPage,
    MeuscursosPage,
    SobrePage,
    ContaPage,
    ChangePasswordPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})

export class AppModule {}