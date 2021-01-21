import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import * as data from '../assets/users.json';

@Component({
  selector: 'app-root',
  template: `
  <h1>Ejemplo de leer un JSON con Angular 11</h1>
  <button (click)="firstWay()">Con TypeScript e <i>import Statement</i></button>
  <br>
  <br>
  <button (click)="secondWay()">Con el <i>HttpClient</i></button>
    `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'readJson';

  public contentfile:string='';

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    
  }

  public firstWay():void{
    console.log(data);    
  }

  public secondWay():void{
    this.httpClient.get("assets/users.json").subscribe(data =>{
      console.log(data);      
    })
  }
}
