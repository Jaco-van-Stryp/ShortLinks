"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AccountService = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var AccountService = /** @class */ (function () {
    function AccountService(HttpClient, base) {
        this.HttpClient = HttpClient;
        this.base = base;
        this.currentUserSource = new rxjs_1.BehaviorSubject(null);
        this.currentUser$ = this.currentUserSource.asObservable();
    }
    AccountService.prototype.Login = function (account) {
        var _this = this;
        return this.HttpClient.post(this.base.BaseURL + 'User/Login', account).pipe(rxjs_1.map(function (res) {
            var user = res;
            if (user) {
                _this.setCurrentUser(user);
            }
        }));
    };
    AccountService.prototype.Register = function (account) {
        var _this = this;
        return this.HttpClient.post(this.base.BaseURL + 'User/Register', account).pipe(rxjs_1.map(function (res) {
            var user = res;
            if (user) {
                _this.setCurrentUser(user);
            }
        }));
    };
    AccountService.prototype.setCurrentUser = function (user) {
        localStorage.setItem('user', JSON.stringify(user));
        this.currentUserSource.next(user);
    };
    AccountService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], AccountService);
    return AccountService;
}());
exports.AccountService = AccountService;
