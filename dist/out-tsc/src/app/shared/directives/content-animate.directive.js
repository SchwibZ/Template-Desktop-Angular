import * as tslib_1 from "tslib";
// Angular
import { Directive } from '@angular/core';
import { animate, style } from '@angular/animations';
import { NavigationEnd } from '@angular/router';
/**
 * Page load animation
 *
 */
let ContentAnimateDirective = class ContentAnimateDirective {
    /**
     * Directive Consturctor
     * @param el: ElementRef
     * @param router: Router
     * @param animationBuilder: AnimationBuilder
     */
    constructor(el, router, animationBuilder) {
        this.el = el;
        this.router = router;
        this.animationBuilder = animationBuilder;
    }
    /**
     * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
     */
    /**
     * On init
     */
    ngOnInit() {
        // animate the content
        this.initAnimate();
        // animate page load
        this.events = this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.player.play();
            }
        });
    }
    /**
     * On destroy
     */
    ngOnDestroy() {
        this.events.unsubscribe();
        this.player.destroy();
    }
    /**
     * Animate page load
     */
    initAnimate() {
        this.player = this.animationBuilder
            .build([
            // style({opacity: 0, transform: 'translateY(15px)'}),
            // animate(500, style({opacity: 1, transform: 'translateY(0)'})),
            // style({transform: 'none'}),
            style({
                transform: 'translateY(-1%)',
                opacity: 0,
                position: 'static',
                height: '100%'
            }),
            animate('0.5s ease-in-out', style({ transform: 'translateY(0%)', opacity: 1 }))
        ])
            .create(this.el.nativeElement);
    }
};
ContentAnimateDirective = tslib_1.__decorate([
    Directive({
        selector: '[contentAnimate]'
    })
], ContentAnimateDirective);
export { ContentAnimateDirective };
//# sourceMappingURL=content-animate.directive.js.map