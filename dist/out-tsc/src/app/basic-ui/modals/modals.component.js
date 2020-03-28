import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let ModalsComponent = class ModalsComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    openModal(exampleModalContent) {
        this.modalService.open(exampleModalContent, { size: 'lg' });
    }
    openMediumModal(mediumModalContent) {
        this.modalService.open(mediumModalContent);
    }
    openSmallModal(smallModalContent) {
        this.modalService.open(smallModalContent, { size: 'sm' });
    }
};
ModalsComponent = tslib_1.__decorate([
    Component({
        selector: 'app-modals',
        templateUrl: './modals.component.html',
        styleUrls: ['./modals.component.scss']
    })
], ModalsComponent);
export { ModalsComponent };
//# sourceMappingURL=modals.component.js.map