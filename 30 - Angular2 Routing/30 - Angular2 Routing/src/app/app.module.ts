import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeeTitle.Pipe';
import { EmployeeCountComponent } from './employee/EmployeeCount.component';
import { SimpleComponent } from './Others/Simple.component';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './employee/Home/home.Component';
import { PageNotFoundComponent } from './Others/pageNotFound.Component';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeService } from './employee/employee.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employees', component: EmployeeListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent, PageNotFoundComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }
