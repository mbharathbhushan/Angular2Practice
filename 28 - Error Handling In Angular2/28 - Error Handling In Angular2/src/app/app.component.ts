import { Component } from '@angular/core';
import { EmployeeService } from './employee/employee.service';

@Component({
    selector: 'my-app',
    template: `<list-employee></list-employee>
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
 