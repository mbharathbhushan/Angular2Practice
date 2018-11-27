import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `Name : <input [value]='name' (input)='name=$event.target.value'/>
<br/>
You entered : {{name}}
<br/>
Name : <input [(ngModel)]='lastName'/>
<br/>
You entered : {{lastName}}
`
})
export class AppComponent {
    name: string = "tom";
    lastName: string = "Last Name with Ng Model";

    onClick(): void {
        console.log('Button Clicked');
    }


}
 