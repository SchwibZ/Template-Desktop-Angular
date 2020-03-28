import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let SidebarComponent = class SidebarComponent {
    constructor() {
        this.uiBasicCollapsed = false;
        this.samplePagesCollapsed = false;
    }
    ngOnInit() {
        const body = document.querySelector('body');
        // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
        document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
            el.addEventListener('mouseover', function () {
                if (body.classList.contains('sidebar-icon-only')) {
                    el.classList.add('hover-open');
                }
            });
            el.addEventListener('mouseout', function () {
                if (body.classList.contains('sidebar-icon-only')) {
                    el.classList.remove('hover-open');
                }
            });
        });
    }
};
SidebarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-sidebar',
        templateUrl: './sidebar.component.html',
        styleUrls: ['./sidebar.component.scss']
    })
], SidebarComponent);
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map