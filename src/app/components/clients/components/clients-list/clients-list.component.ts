import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/components/clients/services/client.service';
import { RequestClient } from  'src/app/models/RequestClient';


@Component({
  selector: 'app-clients-list',
  templateUrl: './clients-list.component.html',
  styleUrls: ['./clients-list.component.css']
})
export class ClientsListComponent implements OnInit {
  clients: RequestClient[] = [];

  currentClient;
  
  currentIndex = -1;
  identification = '';
  constructor(private clienteService: ClientService) {

    this.retrieveClients();
   }
  ngOnInit(): void {
    this.retrieveClients();
  }
  retrieveClients(): void {
    this.clienteService.getAll()
      .subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveClients();
    this.currentClient= new RequestClient();
    this.currentIndex = -1;
  }
  setActiveClient(client: RequestClient, index: number): void {
    this.currentClient = client;
    this.currentIndex = index;
    console.log(client);
    console.log(index);
    console.log(client.clienteId);
  }
  removeAllClients(): void {
    this.clienteService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveClients();
        },
        error => {
          console.log(error);
        });
  }
  searchIdentification(): void {
    this.clienteService.findByIdentification(this.identification)
      .subscribe(
        data => {
          this.clients = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}