import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UsuarioProvider } from '../providers/usuario/usuario';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { firebaseConfig } from '../config/firebase.config';

import { IonicStorageModule } from '@ionic/storage';
import { UbicacionProvider } from '../providers/ubicacion/ubicacion';

import { AgmCoreModule } from '@agm/core';

// plugins
import { Geolocation } from '@ionic-native/geolocation';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    IonicStorageModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyClD2Cubc_5MFbrfDjZyeoR04t64TRJR3s'
    }) 
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsuarioProvider,
    UbicacionProvider,
    Geolocation
  ]
})
export class AppModule {}
