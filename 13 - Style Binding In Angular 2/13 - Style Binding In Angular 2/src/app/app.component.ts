import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<button style='color:red' [style.fontWeight]="isBold ? 'bold' :'normal'">My Button </button>
<br/>
<button style='color:red' [style.font-size.px]="fontSize">My Button </button>
<br/>
<button style='color:red' [ngStyle]="addStyles()">My Button </button>
`,
})
export class AppComponent  {
    isBold: boolean = true;
    fontSize: number = 30;
    isItalic: boolean = true;

    addStyles() {

        let styles = {
            'font-size.px': this.fontSize,
            'font-style': this.isItalic ? 'Italic' : 'normal',
            'font-weight': this.isBold ? 'bold': 'normal'
        };

        return styles;
    }
}
