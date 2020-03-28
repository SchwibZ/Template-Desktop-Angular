import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MdiComponent } from './mdi/mdi.component';
const routes = [
    { path: 'mdi', component: MdiComponent }
];
let IconsModule = class IconsModule {
};
IconsModule = tslib_1.__decorate([
    NgModule({
        declarations: [MdiComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes),
        ]
    })
], IconsModule);
export { IconsModule };
//# sourceMappingURL=icons.module.js.map