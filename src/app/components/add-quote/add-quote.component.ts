import { Component, OnInit } from '@angular/core';
import { Client } from "../../models/client";
import { ClientService } from "../../services/client.service";
@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css'],
  providers: [ClientService]
})
export class AddQuoteComponent implements OnInit {
  public title: string;
  public client: Client;
  constructor(
    private _clientService: ClientService
  ) {
    this.title = "Agendar cita";
    this.client = new Client('','','');
  }

  ngOnInit(): void {
  }
  onSubmit(form){
    console.log(this.client);
    this._clientService.saveClient(this.client).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);

      }
    );

  }
}
