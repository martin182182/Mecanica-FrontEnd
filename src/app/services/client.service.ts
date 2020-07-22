import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Client} from '../models/client';
import {global} from './global';

@Injectable()
export class ClientService{
  public url:string;
  constructor(
    private _http: HttpClient
  ){
    this.url = global.url;
  }
  testService(){
    return 'Prueba';
  }
saveClient(client: Client):Observable<any>{
    let params = JSON.stringify(client);
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.post(this.url+'nuevoCliente',params,{headers:headers});
  }

  getClients():Observable<any>{
    let headers = new HttpHeaders().set('Content-Type','application/json');
    return this._http.get(this.url+'clientes',{headers:headers});
  }
}
