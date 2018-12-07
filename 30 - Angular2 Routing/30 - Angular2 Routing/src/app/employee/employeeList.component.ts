import { Component, OnInit } from '@angular/core'
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css']
})

export class EmployeeListComponent implements OnInit {

    statusMessage: string = 'Data is loading, please wait';
    ngOnInit(): void {
        this.employeeService.getEmployees().subscribe((employeeData) => this.employees = employeeData, (errormessage) =>
        {
            console.error(errormessage);
            this.statusMessage = 'Problem in Service, Plese try again later'
        });
    }
    employees: IEmployee[];

    selectedRadioButtonValue: string = "All";

    onEmployeeCountRadioButtonChanged(selectedValue: string) {
        this.selectedRadioButtonValue = selectedValue;
    }

    constructor(private employeeService: EmployeeService) {

    };

    //refreshEmployees(): void {
    //    this.employees.push(

    //        {
    //             code: 'emp105', name: 'Maanvi', gender: 'Female',
    //            annualSalary: 6500.826, dateOfBirth: '10/14/1981'
    //        }
    //    );
    //}

    trackByCode(index: number, empl: any): string {
        return empl.code;
    }

    getTotalEmployeesCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }

    getTotalFemaleEmployeesCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

}