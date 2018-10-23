import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<button class="colorClass" [class]='classesToApply'>My Button </button>

<br/><br/>
<button class="colorClass boldClass italicClass" [class.boldClass]='applyBoldClass'>My Button </button>
<br/><br/>
<button class="colorClass" [ngClass]='addClasses()'>My Button </button>
`,
})
export class AppComponent  {
    classesToApply: string = "boldClass italicClass";
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = false;

    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };

        return classes;
    }
}
