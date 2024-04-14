"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.GenerateURLComponent = void 0;
var core_1 = require("@angular/core");
var GenerateURLComponent = /** @class */ (function () {
    function GenerateURLComponent(URLService, toastr) {
        this.URLService = URLService;
        this.toastr = toastr;
        this.Url = {};
    }
    GenerateURLComponent.prototype.saveURL = function (link) {
        var _this = this;
        this.URLService.CreateShortURL(link).subscribe({
            next: function (res) {
                _this.toastr.success('Your URL has been created Successfully.');
            },
            error: function (error) {
                console.log(error);
                _this.toastr.error(error.error);
            }
        });
    };
    __decorate([
        core_1.Output()
    ], GenerateURLComponent.prototype, "Url");
    GenerateURLComponent = __decorate([
        core_1.Component({
            selector: 'app-generate-url',
            templateUrl: './generate-url.component.html',
            styleUrls: ['./generate-url.component.scss']
        })
    ], GenerateURLComponent);
    return GenerateURLComponent;
}());
exports.GenerateURLComponent = GenerateURLComponent;
