"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.LinkPageComponent = void 0;
var core_1 = require("@angular/core");
var LinkPageComponent = /** @class */ (function () {
    function LinkPageComponent(URLService) {
        this.URLService = URLService;
        this.Links = [];
    }
    LinkPageComponent.prototype.ngOnInit = function () {
        this.loadURLS();
    };
    LinkPageComponent.prototype.loadURLS = function () {
        var _this = this;
        this.URLService.GetLinksForUser().subscribe({
            next: function (res) {
                _this.Links = res;
            }
        });
    };
    LinkPageComponent = __decorate([
        core_1.Component({
            selector: 'app-link-page',
            templateUrl: './link-page.component.html',
            styleUrls: ['./link-page.component.scss']
        })
    ], LinkPageComponent);
    return LinkPageComponent;
}());
exports.LinkPageComponent = LinkPageComponent;
