import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloService } from './hello.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dAngular';
  inputText = '';
  inputText$: Observable<string> | undefined;

  constructor(public helloService: HelloService){

  }

  myClick(greeting: string){
    this.inputText$ = this.helloService.greet(greeting);
  }
}
