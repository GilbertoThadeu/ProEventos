import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any;

  public eventos0: any = [
    {
      Tema: 'Angular 11',
      Local: 'Belo Horizonte'
    },
    {
      Tema: '.NET 5',
      Local: 'São Paulo'
    },
    {
      Tema: 'Angular e Suas Novidades',
      Local: 'Rio de Janeiro'
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void{
    this.http.get('https://localhost:5001/api/Eventos').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    );
    //this.eventos = this.eventos0;
  }

}
