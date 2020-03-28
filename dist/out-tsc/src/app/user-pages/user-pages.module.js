import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
const routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
];
let UserPagesModule = class UserPagesModule {
};
UserPagesModule = tslib_1.__decorate([
    NgModule({
        declarations: [LoginComponent, RegisterComponent],
        imports: [
            CommonModule,
            RouterModule.forChild(routes)
        ]
    })
], UserPagesModule);
export { UserPagesModule };
//# sourceMappingURL=user-pages.module.js.map