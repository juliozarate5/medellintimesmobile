import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DetalleNoticiaPage} from "../detallenoticia/detallenoticia";
import {NoticiaService} from '../../../services/noticia.service';
import {Noticia} from '../../../services/noticia';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    data: any;
    nombre: any;
    listaNot: Noticia[];
    listaNot1: Noticia[];
    long: number;
    
  constructor(private servicio: NoticiaService, public navCtrl: NavController) {
        this.data = {};
        this.data.nombre = "";
  }
  
      loadNoticias() {
        this.servicio.getNoticias()
            .subscribe(
            data => {this.listaNot = data, this.long = data.length},
            er => console.log(er),
            () => console.log(this.listaNot)
            );
    }
    
        getNoticia() {
        let nom = this.data.nombre;
        if (nom !== "") {
            this.listaNot=null;
            this.servicio.getNoticia(nom)
                .subscribe(
                data => this.listaNot1 = data,
                er => console.log(er),
                () => console.log('ok')
                );
        } else {
            this.listaNot1 = null;
            this.loadNoticias();
        }
    }
    
    doRefresh(refresher) {
        this.loadNoticias();
        setTimeout(() => {
            refresher.complete();
        }, 200);
    }
    
    ionViewWillEnter() {
        this.loadNoticias();
    }
    
    cargarAnteriores(){
         setTimeout(() => {
        }, 200); 
    }
    
    verDetalle(item){    
        this.navCtrl.push(DetalleNoticiaPage, {
            id: item.idnoticia
        });
    }

}
