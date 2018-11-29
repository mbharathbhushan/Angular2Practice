import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<list-employee></list-employee>
`
})
export class AppComponent {
    name: string = "tom";
    lastName: string = "Last Name with Ng Model";

    onClick(): void {
        console.log('Button Clicked');
    }


}
 