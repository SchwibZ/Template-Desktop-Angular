import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'demo1';
        this.showSidebar = true;
        this.showNavbar = true;
        this.showFooter = true;
        // Removing Sidebar, Navbar, Footer for Documentation, Error and Auth pages
        router.events.forEach((event) => {
            if (event instanceof NavigationStart) {
                if ((event['url'] == '/user-pages/login') || (event['url'] == '/user-pages/register') || (event['url'] == '/error-pages/404') || (event['url'] == '/error-pages/500')) {
                    this.showSidebar = false;
                    this.showNavbar = false;
                    this.showFooter = false;
                    document.querySelector('.main-panel').classList.add('w-100');
                    document.querySelector('.page-body-wrapper').classList.add('full-page-wrapper');
                    document.querySelector('.content-wrapper').classList.remove('auth', 'auth-img-bg');
                    document.querySelector('.content-wrapper').classList.remove('auth', 'lock-full-bg');
                    if ((event['url'] == '/error-pages/404') || (event['url'] == '/error-pages/500')) {
                        document.querySelector('.content-wrapper').classList.add('p-0');
                    }
                }
                else {
                    this.showSidebar = true;
                    this.showNavbar = true;
                    this.showFooter = true;
                    document.querySelector('.main-panel').classList.remove('w-100');
                    document.querySelector('.page-body-wrapper').classList.remove('full-page-wrapper');
                    document.querySelector('.content-wrapper').classList.remove('auth', 'auth-img-bg');
                    document.querySelector('.content-wrapper').classList.remove('p-0');
                }
            }
        });
        // Spinner for lazyload modules
        router.events.forEach((event) => {
            if (event instanceof RouteConfigLoadStart) {
                this.isLoading = true;
            }
            else if (event instanceof RouteConfigLoadEnd) {
                this.isLoading = false;
            }
        });
    }
    ngOnInit() {
        // Scroll to top after route change
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof NavigationEnd)) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.scss'],
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map