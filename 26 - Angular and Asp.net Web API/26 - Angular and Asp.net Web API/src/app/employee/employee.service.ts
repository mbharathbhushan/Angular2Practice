import { Injectable } from '@angular/core';
import { IEmployee } from './employee';

@Injectable()
export class EmployeeService {

    getEmployees(): IEmployee[] {
        return [
            {
                id:1,code: 'emp101', name: 'Tom', gender: 'Male',
                annualSalary: 5500, dateOfBirth: '06/25/1988'
            },
            {
                id:2,code: 'emp102', name: 'Alex', gender: 'Male',
                annualSalary: 5700.95, dateOfBirth: '9/6/1982'
            },
            {
                id:3,code: 'emp103', name: 'Mike', gender: 'Male',
                annualSalary: 5900, dateOfBirth: '12/8/1979'
            },
            {
                id:4,code: 'emp104', name: 'Mary', gender: 'Female',
                annualSalary: 6500.826, dateOfBirth: '10/14/1980'
            },
        ];
    }


}