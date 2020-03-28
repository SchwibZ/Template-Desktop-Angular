import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicTableComponent } from './basic-table/basic-table.component';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'basic-table', component: BasicTableComponent }
];
let TablesModule = class TablesModule {
};
TablesModule = tslib_1.__decorate([
    NgModule({
        declarations: [BasicTableComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
        ]
    })
], TablesModule);
export { TablesModule };
//# sourceMappingURL=tables.module.js.map