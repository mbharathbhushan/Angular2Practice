﻿import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/Observable/throw';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) { }
    getEmployees(): Observable<IEmployee[]> {
        return this._http.get('http://localhost:60860/Api/Employees')
            .map((Response) => <IEmployee[]>Response.json())
            .catch(this.handleError);
    }

    handleError(errorD: Response) {
        console.log(errorD);
        return Observable.throw(errorD);
    }
}