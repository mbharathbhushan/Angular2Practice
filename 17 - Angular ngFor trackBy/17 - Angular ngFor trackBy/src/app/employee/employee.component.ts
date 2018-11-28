import { Component } from '@angular/core'
@Component(
    {
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css']
    })
export class EmployeeComponent {
    columnSpan: number = 2;
    firstName: string = 'Bharath';
    lastName: string = 'Mangalpally';
    gender: string = 'male';
    age: number = 20;
    showDetails: boolean = false;

    toggleDetails(): void {
        this.showDetails = !this.showDetails
    }

}