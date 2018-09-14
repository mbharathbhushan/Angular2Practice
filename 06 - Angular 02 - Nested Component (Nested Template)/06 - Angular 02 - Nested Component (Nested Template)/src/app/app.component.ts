import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<div><h1>{{name}}</h1>
<my-employee></my-employee></div>
`,
})
export class AppComponent  { name = 'Employee Details'; }
