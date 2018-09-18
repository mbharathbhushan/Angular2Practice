import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<input id='inputId' type='text' value ='Tom'/>`,
})
export class AppComponent  { name = 'Angular 2'; }

////inputId.getAttribute('value')
////"Tom"
////inputId.value
////"Tom"
////inputId.getAttribute('value')
////"Tom"
////inputId.value
////""
