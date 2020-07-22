import { Component, OnInit } from '@angular/core';
import {Client} from '../../models/client';
import { ClientService } from "../../services/client.service";
import {global} from '../../services/global';
@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css'],
  providers: [ClientService]
})
export class ClientComponent implements OnInit {
  public clients: Client[];
  p: number = 1;
  constructor(
    private _clientService: ClientService
  ) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients(){
    this._clientService.getClients().subscribe(
      response =>{
        console.log(response);
        if(response.clients){
          this.clients = response.clients;
        }

      },
      error=>{
        console.log(error);

      }
    );
  }


}
