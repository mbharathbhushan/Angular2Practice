import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `Your Text = <input type='text' [(ngModel)] = 'userText' />
<br/>
<br/>
<simple [simpleInput]='userText' ></simple>
`
})
export class AppComponent {
    ////name: string = "tom";
    ////lastName: string = "Last Name with Ng Model";

    ////onClick(): void {
    ////    console.log('Button Clicked');
    ////}

    userText: string ='Pragim';

}
 