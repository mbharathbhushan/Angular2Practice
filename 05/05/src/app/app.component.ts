import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
     ////template: `<h1>Hello {{name}}</h1>`, - Example for Inline Template
  templateUrl:'app/app.component.html'
})
export class AppComponent  { name = 'Angular 2 Template Vs Angular Template URL'; }
