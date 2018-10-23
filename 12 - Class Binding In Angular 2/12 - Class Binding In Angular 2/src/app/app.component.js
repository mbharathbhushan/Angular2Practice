"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.classesToApply = "boldClass italicClass";
        this.applyBoldClass = true;
        this.applyItalicClass = false;
    }
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<button class=\"colorClass\" [class]='classesToApply'>My Button </button>\n\n<br/><br/>\n<button class=\"colorClass boldClass italicClass\" [class.boldClass]='applyBoldClass'>My Button </button>\n<br/><br/>\n<button class=\"colorClass\" [ngClass]='addClasses()'>My Button </button>\n",
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map