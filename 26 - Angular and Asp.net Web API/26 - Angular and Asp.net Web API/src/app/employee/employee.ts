export interface IEmployee {
    id: number;
    code: string;
    name: string;
    gender: string;
    annualSalary: number;
    dateOfBirth: string;
    ////department?: string;

    ////computeMonthlySalary(annualSalary: number): number;
}

export class Employee implements IEmployee {
    ////computeMonthlySalary(annualSalary: number): number {
    ////    return annualSalary / 12;
    ////}
    constructor(public id: number, public code: string, public name: string, public gender: string, public annualSalary: number, public dateOfBirth: string) {
    }
}