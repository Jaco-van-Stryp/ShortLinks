"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RegisterComponent = void 0;
var core_1 = require("@angular/core");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(AccountService, Toastr) {
        this.AccountService = AccountService;
        this.Toastr = Toastr;
        this.User = {};
    }
    RegisterComponent.prototype.Register = function (User) {
        var _this = this;
        this.AccountService.Register(User).subscribe({
            next: function (res) {
                _this.Toastr.success('Registration Successful');
                var currentUser = _this.AccountService.GetCurrentUser();
                console.log(currentUser.token);
            },
            error: function () {
                _this.Toastr.error('User Already Exists');
            }
        });
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['./register.component.scss']
        })
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
