import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {HomePage} from '../home/home';
import {NoticiaService} from '../../../services/noticia.service';
import {Noticia} from '../../../services/noticia';


@Component({
    selector: 'page-detallenoticia',
    templateUrl: 'detallenoticia.html'
})
export class DetalleNoticiaPage {

    lNot: Noticia[];
    listaNot: Noticia;
    long: number;
    
    constructor(public navCtrl: NavController, public navParams: NavParams,
         private servicio: NoticiaService) {

        console.log(this.navParams.get('id'));
      this.loadDetalles(this.navParams.get('id'));
        //this.loadNoticia(this.navParams.get('id'));
    }

    cancelar(){
        this.navCtrl.pop(HomePage)
    }

    loadDetalles(id) {
       this.servicio.getItemsNoticia(id)
            .subscribe(
            result => this.lNot = result,
            er => console.log(er),
            () => {}
            );
    }

}
