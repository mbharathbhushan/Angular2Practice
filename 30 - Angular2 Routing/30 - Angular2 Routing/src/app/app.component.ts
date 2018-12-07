import { Component } from '@angular/core';
import { EmployeeService } from './employee/employee.service';

@Component({
    selector: 'my-app',
    template: `<div style="padding:5px">
                        <ul class="nav nav-tabs">
                            <li routerLinkActive="active">
                                <a routerLink="home">Home</a>
                            </li>
                            <li routerLinkActive="active">
                                <a routerLink="employees">Employees</a>
                            </li>
                        </ul>
                        <br/>
                        <router-outlet></router-outlet>
                    </div>
`,
    providers: [EmployeeService]
})
export class AppComponent {
    ////name: string = "tom";
    ////lastName: string = "Last Name with Ng Model";

    ////onClick(): void {
    ////    console.log('Button Clicked');
    ////}

    userText: string ='Pragim';

}
 