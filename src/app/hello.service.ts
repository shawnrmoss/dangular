import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { _SERVICE } from 'src/declarations/hello/hello.did';
const helloService = require('src/declarations/hello').hello as _SERVICE;

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  constructor() { }

  greet(greeting: string): Observable<string> {
    return from(helloService.greet(greeting));
  }
}
