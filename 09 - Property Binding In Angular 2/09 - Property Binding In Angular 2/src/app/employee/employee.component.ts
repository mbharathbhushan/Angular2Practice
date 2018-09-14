import { Component } from '@angular/core'
@Component(
    {
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
        styleUrls: ['app/employee/employee.component.css']
    })
export class EmployeeComponent {
    firstName: string = 'Bharath';
    lastName: string = 'Mangalpally';
    gender: string = 'male';
    age: number = 20;
}