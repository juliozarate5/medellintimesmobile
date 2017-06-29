/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import {Injectable} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Noticia} from './noticia';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/catch';

@Injectable()
export class NoticiaService {

    private options;
    private url = "http://localhost:8000/api/contenido";
    

    constructor(private http: Http) {
        let headers = new Headers({
            'Content-Type': 'application/json; charset=utf-8',

        });
        this.options = new RequestOptions({headers: headers});
    }

    getNoticias(): Observable<Noticia[]> {
        let url = `${this.url}`;
        return this.http.get(url, this.options)
            .map(res => res.json()).
            catch(this.handleError);;
    }
    
   getItemsNoticia(id: any): Observable<Noticia[]> {
         let url = `${this.url}/${id}`;
        return this.http.get(url, this.options)
            .map(res => res.json()).
            catch(this.handleError);;
    }
    
   getNoticia(id: any): Observable<Noticia[]> {
        let url = `${this.url}/${id}`;
        return this.http.get(url, this.options)
            .map(res => res.json())
            .catch(this.handleError);;
    }
    
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            let body = error.json() || '';
            let err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''}${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
    
    
}