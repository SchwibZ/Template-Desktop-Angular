import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Error404Component } from './error404/error404.component';
import { Error500Component } from './error500/error500.component';
import { RouterModule } from '@angular/router';
const routes = [
    { path: '404', component: Error404Component },
    { path: '500', component: Error500Component },
];
let ErrorPagesModule = class ErrorPagesModule {
};
ErrorPagesModule = tslib_1.__decorate([
    NgModule({
        declarations: [Error404Component, Error500Component],
        imports: [
            CommonModule,
            RouterModule.forChild(routes)
        ]
    })
], ErrorPagesModule);
export { ErrorPagesModule };
//# sourceMappingURL=error-pages.module.js.map