import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component(
    {
        selector: 'simple',
        template: `You entered : {{simpleInput}}`
    })
//// Below Line will also work but if we implement it from onchanges interfaces their will be less chance of having typo (Typing ) error
////export class SimpleComponent {
export class SimpleComponent implements OnChanges {
    ngOnChanges(changes: SimpleChanges): void {
        for (let property in changes) {
            let change = changes[property];
            console.log('property Name = ' + property + ' Prev Value =' + JSON.stringify(change.previousValue) + ', Current Value =' + JSON.stringify(change.currentValue));
        }

        
    }
    @Input()
    simpleInput: string;

   
}