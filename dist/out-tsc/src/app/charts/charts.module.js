import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';
import { ChartjsComponent } from './chartjs/chartjs.component';
const routes = [
    { path: 'chartjs', component: ChartjsComponent },
];
let ChartsDemoModule = class ChartsDemoModule {
};
ChartsDemoModule = tslib_1.__decorate([
    NgModule({
        declarations: [ChartjsComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
            ChartsModule
        ]
    })
], ChartsDemoModule);
export { ChartsDemoModule };
//# sourceMappingURL=charts.module.js.map