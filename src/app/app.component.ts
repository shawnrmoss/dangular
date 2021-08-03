import { Component } from '@angular/core';

const helloService = require('src/declarations/hello').hello;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dAngular';

  inputText = '';

  constructor(){

  }





  async myClick(text: string){
    this.inputText = await helloService.greet(text);
  }
}
