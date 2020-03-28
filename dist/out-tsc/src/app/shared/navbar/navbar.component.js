import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
let NavbarComponent = class NavbarComponent {
    constructor(config) {
        this.iconOnlyToggled = false;
        this.sidebarToggled = false;
        config.placement = 'bottom-right';
    }
    ngOnInit() {
    }
    // toggle sidebar in small devices
    toggleOffcanvas() {
        document.querySelector('.sidebar-offcanvas').classList.toggle('active');
    }
    // toggle sidebar
    toggleSidebar() {
        let body = document.querySelector('body');
        if ((!body.classList.contains('sidebar-toggle-display')) && (!body.classList.contains('sidebar-absolute'))) {
            this.iconOnlyToggled = !this.iconOnlyToggled;
            if (this.iconOnlyToggled) {
                body.classList.add('sidebar-icon-only');
            }
            else {
                body.classList.remove('sidebar-icon-only');
            }
        }
        else {
            this.sidebarToggled = !this.sidebarToggled;
            if (this.sidebarToggled) {
                body.classList.add('sidebar-hidden');
            }
            else {
                body.classList.remove('sidebar-hidden');
            }
        }
    }
    // toggle right sidebar
    toggleRightSidebar() {
        document.querySelector('#right-sidebar').classList.toggle('open');
    }
};
NavbarComponent = tslib_1.__decorate([
    Component({
        selector: 'app-navbar',
        templateUrl: './navbar.component.html',
        styleUrls: ['./navbar.component.scss'],
        providers: [NgbDropdownConfig]
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map