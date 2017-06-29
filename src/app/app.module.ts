import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, LOCALE_ID } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HttpModule} from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { DetalleNoticiaPage } from '../pages/detallenoticia/detallenoticia';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {NoticiaService} from '../../services/noticia.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    DetalleNoticiaPage
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    DetalleNoticiaPage
  ],
  providers: [
    NoticiaService,
    StatusBar,
    SplashScreen,
    { provide: LOCALE_ID, useValue: 'es-US' },
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
