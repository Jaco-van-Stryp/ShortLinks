"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var jwt_interceptor_1 = require("./_interceptors/jwt.interceptor");
var link_router_component_1 = require("./link-router/link-router.component");
var home_component_1 = require("./home/home.component");
var not_found_component_1 = require("./not-found/not-found.component");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var animations_1 = require("@angular/platform-browser/animations");
var forms_1 = require("@angular/forms");
var ngx_toastr_1 = require("ngx-toastr");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                link_router_component_1.LinkRouterComponent,
                home_component_1.HomeComponent,
                not_found_component_1.NotFoundComponent,
                register_component_1.RegisterComponent,
                login_component_1.LoginComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                ngx_toastr_1.ToastrModule.forRoot(),
                forms_1.FormsModule,
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: jwt_interceptor_1.JwtInterceptor, multi: true },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
