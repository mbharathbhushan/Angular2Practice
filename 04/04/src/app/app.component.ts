import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    template: '<h1>{{name}} , welcome to Angular 2.<\h1>'
})
export class AppComponent {
    name: string = "Hello Bharath";
}