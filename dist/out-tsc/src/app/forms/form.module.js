import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicElementsComponent } from './basic-elements/basic-elements.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes = [
    { path: 'basic-elements', component: BasicElementsComponent }
];
let FormModule = class FormModule {
};
FormModule = tslib_1.__decorate([
    NgModule({
        declarations: [BasicElementsComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            NgbModule
        ]
    })
], FormModule);
export { FormModule };
//# sourceMappingURL=form.module.js.map