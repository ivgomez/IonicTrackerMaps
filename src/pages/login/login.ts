import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController,  LoadingController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { UsuarioProvider } from '../../providers/usuario/usuario'
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController, 
    private alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public _usuarioProv: UsuarioProvider) {
  }

  ionViewDidLoad() {
    
    this.slides.paginationType = 'progress';
    this.slides.lockSwipes(true);
    this.slides.freeMode = false;
  }

  mostrarInput() {
     this.alertCtrl.create({
      title: 'Ingrese el usuaario',
      inputs: [
        {
          name: 'username',
          placeholder: 'Username'
        }
      ],
      buttons: [{
        text: 'Cancelar',
        role: 'cancel'
      },{
        text: 'Ingresar',
        handler: data=>{          
          this.verificar_usuario( data.username )
        }
      }]
    }).present();
    
  }

  verificar_usuario( clave: string) {
    let loading = this.loadingCtrl.create({
      content: 'verificando'
    });
    
    loading.present();

    this._usuarioProv.verificaUsuario( clave )
          .then( existe => {

            loading.dismiss();
            
            if ( existe ) {

              this.slides.lockSwipes(false);
              this.slides.freeMode = true;
              this.slides.slideNext();
              this.slides.lockSwipes(true);
              this.slides.freeMode = false;

            } else {
              this.alertCtrl.create({
                title: 'Usuario incorrecto',
                subTitle: 'Comuniquese con el administrador del app',
                buttons: ['aceptar']
              }).present();
            }
          });
  }

  ingresar() {
    this.navCtrl.setRoot( HomePage );
  }

}
