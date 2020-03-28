import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
const routes = [
    { path: 'blank-page', component: BlankPageComponent }
];
let GeneralPagesModule = class GeneralPagesModule {
};
GeneralPagesModule = tslib_1.__decorate([
    NgModule({
        declarations: [BlankPageComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            NgbModule
        ]
    })
], GeneralPagesModule);
export { GeneralPagesModule };
//# sourceMappingURL=general-pages.module.js.map