webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./tasks/tasks.module": [
		"../../../../../src/app/tasks/tasks.module.ts",
		"tasks.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"fa fa-refresh glyphicon-spin spinner\" *ngIf=\"loading\"></span>\n<nav class=\"navbar navbar-expand-lg navbar-light bg-faded\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\" onclick=\"return false\">Task Manager</a>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"nav navbar-nav mr-auto\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"/welcome\">Home\n          <span class=\"sr-only\">(current)</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"/tasks\">Task list</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"/tasks/0/edit\">Add Task</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\"  [routerLinkActiveOptions]=\"{ exact: true }\">\n        <a class=\"nav-link\" routerLink=\"/users\">User List</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"/users/0/edit\">Add User</a>\n      </li>\n    </ul>\n    <ul class=\"navbar-nav navbar-right\">\n      <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\">Welcome {{ authService.currentUser.userName }}</a>\n      </li>\n\n      <li class=\"nav-item\" *ngIf=\"authService.isLoggedIn()\">\n        <a class=\"nav-link\" *ngIf=\"!messageService.isDisplayed\" (click)=\"displayMessages()\" href=\"javascript:void(0)\">Show Messages</a>\n        <a class=\"nav-link\" *ngIf=\"messageService.isDisplayed\" (click)=\"hideMessages()\" href=\"javascript:void(0)\">Hide Messages</a>\n      </li>\n\n      <li *ngIf=\"!authService.isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" [routerLinkActive]=\"['active']\" routerLink=\"/login\">Log In</a>\n      </li>\n\n      <li *ngIf=\"authService.isLoggedIn()\" class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"logOut()\">Log Out</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div [ngClass]=\"{'col-10':messageService.isDisplayed,'col-12':!messageService.isDisplayed}\">\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"col-2\">\n      <router-outlet name=\"popup\"></router-outlet>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_auth_service_auth_service__ = __webpack_require__("../../../../../src/app/user/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_message_service_message_service__ = __webpack_require__("../../../../../src/app/messages/message-service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(authService, router, messageService) {
        var _this = this;
        this.authService = authService;
        this.router = router;
        this.messageService = messageService;
        this.loading = true;
        router.events.subscribe(function (routerEvent) {
            _this.checkRouterEvent(routerEvent);
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        // if (this.authService.isLoggedIn() && this.authService.redirectUrl) {
        //   this.router.navigateByUrl(this.authService.redirectUrl)
        // } else { 
        //   this.router.navigate(['/welcome']);
        // }
        // this.authService.checkLoggedInStatus().subscribe(user => { 
        //   if (this.authService.redirectUrl) {
        //     this.router.navigateByUrl(this.authService.redirectUrl)
        //   } else { 
        //     this.router.navigate(['/welcome']);
        //   }
        // });
    };
    AppComponent.prototype.checkRouterEvent = function (routerEvent) {
        if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* NavigationStart */]) {
            this.loading = true;
        }
        if (routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* NavigationEnd */] ||
            routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationCancel */] ||
            routerEvent instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* NavigationError */]) {
            this.loading = false;
        }
    };
    AppComponent.prototype.displayMessages = function () {
        this.router.navigate([{
                outlets: {
                    popup: ['messages']
                }
            }]);
        this.messageService.isDisplayed = true;
    };
    AppComponent.prototype.hideMessages = function () {
        this.messageService.isDisplayed = false;
        this.router.navigate([{
                outlets: {
                    popup: null
                }
            }]);
    };
    AppComponent.prototype.logIn = function () {
        this.router.navigate(['welcolme']);
    };
    AppComponent.prototype.logOut = function () {
        var _this = this;
        this.authService.logout().subscribe(function () { return _this.router.navigateByUrl('/welcome'); }, function (error) { return alert(error); });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__user_auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */], __WEBPACK_IMPORTED_MODULE_3__messages_message_service_message_service__["a" /* MessageService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_locales_it__ = __webpack_require__("../../../common/locales/it.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_mock_data__ = __webpack_require__("../../../../../src/app/common/mock-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__common_ng_material_module__ = __webpack_require__("../../../../../src/app/common/ng-material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_user_module__ = __webpack_require__("../../../../../src/app/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__messages_messages_module__ = __webpack_require__("../../../../../src/app/messages/messages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//import lang

// import langExtra from '@angular/common/locales/extra/it';
Object(__WEBPACK_IMPORTED_MODULE_2__angular_common__["j" /* registerLocaleData */])(__WEBPACK_IMPORTED_MODULE_3__angular_common_locales_it__["a" /* default */]);
// Imports for loading & configuring the in-memory web api







/* Feature Modules */
// import { TasksModule } from './tasks/tasks.module';




var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_angular_in_memory_web_api__["a" /* InMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__common_mock_data__["a" /* MockData */], { delay: 0 }),
                // TasksModule,
                __WEBPACK_IMPORTED_MODULE_11__user_user_module__["a" /* UserModule */],
                __WEBPACK_IMPORTED_MODULE_12__messages_messages_module__["a" /* MessagesModule */],
                __WEBPACK_IMPORTED_MODULE_6__common_ng_material_module__["a" /* NGMaterialModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* AppRoutingModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_9__welcome_welcome_component__["a" /* WelcomeComponent */], __WEBPACK_IMPORTED_MODULE_10__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */]],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* LOCALE_ID */], useValue: "it-IT" }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RouteDefinitions */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_auth_guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RouteDefinitions = [
    {
        path: 'welcome',
        component: __WEBPACK_IMPORTED_MODULE_3__welcome_welcome_component__["a" /* WelcomeComponent */],
        data: {
            role: 'everyone'
        }
    },
    {
        path: 'tasks',
        canActivate: [__WEBPACK_IMPORTED_MODULE_4__user_auth_guard_auth_guard_service__["a" /* AuthGuardService */]],
        loadChildren: './tasks/tasks.module#TasksModule',
        data: {
            role: 'login-user'
        }
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: 'home',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
        data: {
            role: 'everyone'
        }
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["h" /* RouterModule */].forRoot(RouteDefinitions, {
                    enableTracing: false,
                    preloadingStrategy: __WEBPACK_IMPORTED_MODULE_0__angular_router__["f" /* PreloadAllModules */]
                })],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["h" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/common/common-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CommonService = (function () {
    function CommonService() {
        // BASE_URL = "/api";
        this.BASE_URL = "http://localhost:8081/api";
        this.options = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]().set("Content-Type", "application/json")
        };
    }
    CommonService.prototype.raiseServerError = function (error) {
        var message = error || "Server error";
        alert(message + ": \n          NODE server it might be stopped.\n          If it is stopped run the command \n          \"node server\" in a commandline.\n    ");
        console.error(message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(message);
    };
    CommonService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error || "Server error");
    };
    CommonService.prototype.parseResponse = function (res, property) {
        return res[property] || res;
    };
    CommonService.prototype.extractData = function (res) {
        return res || {};
    };
    CommonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "../../../../../src/app/common/mock-data.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MockData; });
var MockData = (function () {
    function MockData() {
    }
    MockData.prototype.createDb = function () {
        var tasks = [];
        var startDate = new Date();
        var endDate = new Date();
        for (var id = 1; id < 11; id++) {
            startDate.setDate(startDate.getDate() + id);
            endDate.setDate(endDate.getDate() + id + 1);
            var task = {
                id: id,
                title: "title test - " + id,
                description: "description test - " + id,
                startDate: startDate,
                endDate: endDate,
                categoryId: null,
                assigneeId: null
            };
            tasks.push(task);
        }
        var login = [
            { userName: "Mario", passWord: "m", id: 1, isAdmin: false },
            { userName: "Marco", passWord: "m", id: 2, isAdmin: false },
            {
                userName: "admin",
                passWord: "admin",
                id: function () {
                    debugger;
                    return 0;
                },
                isAdmin: false
            }
        ];
        (function (value, index, array) {
            return array;
        });
        var logout = [true];
        console.log(tasks);
        return { login: login, logout: logout, tasks: tasks };
    };
    return MockData;
}());



/***/ }),

/***/ "../../../../../src/app/common/ng-material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NGMaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material_core__ = __webpack_require__("../../../material/esm5/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_datepicker__ = __webpack_require__("../../../material/esm5/datepicker.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NGMaterialModule = (function () {
    function NGMaterialModule() {
    }
    NGMaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_select__["a" /* MatSelectModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_material_datepicker__["a" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_material_core__["n" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material_select__["a" /* MatSelectModule */]
            ]
        })
    ], NGMaterialModule);
    return NGMaterialModule;
}());



/***/ }),

/***/ "../../../../../src/app/messages/message-service/message.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MessageService = (function () {
    function MessageService() {
        this.messages = [];
        this.isDisplayed = false;
    }
    MessageService.prototype.addMessage = function (message) {
        var currentDate = new Date();
        this.messages.unshift(message + ' at ' + currentDate.toLocaleString());
    };
    MessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], MessageService);
    return MessageService;
}());



/***/ }),

/***/ "../../../../../src/app/messages/message/message.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__message_service_message_service__ = __webpack_require__("../../../../../src/app/messages/message-service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessageComponent = (function () {
    function MessageComponent(messageService, router) {
        this.messageService = messageService;
        this.router = router;
    }
    MessageComponent.prototype.close = function () {
        // Close the popup.
        this.router.navigate([{ outlets: { popup: null } }]);
        this.messageService.isDisplayed = false;
    };
    MessageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: "\n        <div class=\"row\">\n            <h4 class=\"col-md-10\">Message Log</h4>\n            <span class=\"col-md-2\">\n                <a class=\"btn btn-secondary\"\n                    (click)=\"close()\">\n                    x\n                </a>\n            </span>\n        </div>\n        <div *ngFor=\"let message of messageService.messages; let i=index\">\n            <div *ngIf=\"i<10\" class=\"message-row\">\n                {{ message }}\n            </div>\n        </div>\n    ",
            styles: [
                '.message-row { margin-bottom: 10px }'
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__message_service_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages/messages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__message_message_component__ = __webpack_require__("../../../../../src/app/messages/message/message.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_service_message_service__ = __webpack_require__("../../../../../src/app/messages/message-service/message.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var MessagesModule = (function () {
    function MessagesModule() {
    }
    MessagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["h" /* RouterModule */].forChild([
                    {
                        path: 'messages',
                        component: __WEBPACK_IMPORTED_MODULE_3__message_message_component__["a" /* MessageComponent */],
                        outlet: 'popup'
                    }
                ])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_3__message_message_component__["a" /* MessageComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_4__message_service_message_service__["a" /* MessageService */]]
        })
    ], MessagesModule);
    return MessagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-not-found',
            template: __webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/auth-guard/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("../../../../../src/app/user/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canLoad = function (route) {
        return this.checkLoggedIn(route.path);
    };
    AuthGuardService.prototype.canActivate = function (route, state) {
        return this.checkLoggedIn(state.url);
    };
    AuthGuardService.prototype.checkLoggedIn = function (url) {
        if (this.authService.isLoggedIn()) {
            console.log('this.authService.isLoggedIn()');
            return true;
        }
        this.authService.redirectUrl = url;
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "../../../../../src/app/user/auth-service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__messages_message_service_message_service__ = __webpack_require__("../../../../../src/app/messages/message-service/message.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_common_service__ = __webpack_require__("../../../../../src/app/common/common-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = (function (_super) {
    __extends(AuthService, _super);
    function AuthService(messageService, http) {
        var _this = _super.call(this) || this;
        _this.messageService = messageService;
        _this.http = http;
        _this.URL = _this.BASE_URL;
        return _this;
    }
    AuthService.prototype.serverError = function (error) {
        var errorMessage;
        if (error.message) {
            errorMessage = "Application Error - Messsage:" + error.message + ", stack:" + error.stack;
        }
        else if (error.json()) {
            errorMessage = "Server error: " + error.json().error;
        }
        else {
            errorMessage =
                "Server error: The server might be stopped or your network might have problem.";
        }
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(errorMessage);
    };
    AuthService.prototype.isLoggedIn = function () {
        return !!this.currentUser;
    };
    AuthService.prototype.checkLoggedInStatus = function () {
        var _this = this;
        return this.http
            .post(this.URL + "/login", this.options)
            .map(function (res) {
            _this.currentUser = _this.parseResponse(res, 'user');
            return _this.currentUser;
        })
            .catch(function (error) { return _this.serverError(error); });
    };
    AuthService.prototype.login = function (userName, passWord) {
        var _this = this;
        if (!userName || !passWord) {
            this.messageService.addMessage("Please enter your userName and password");
            return;
        }
        var user = {
            userName: userName,
            passWord: passWord
        };
        return this.http
            .post(this.URL + "/login/", user, this.options)
            .map(function (res) {
            _this.currentUser = _this.parseResponse(res, 'user');
            _this.messageService.addMessage("User: " + _this.currentUser.userName + " logged in");
            return _this.currentUser;
        })
            .catch(function (error) { return _this.serverError(error); });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        return this.http
            .get(this.URL + "/logout", this.options)
            .map(function (res) {
            _this.currentUser = null;
        })
            .catch(function (error) { return _this.serverError(error); });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__messages_message_service_message_service__["a" /* MessageService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}(__WEBPACK_IMPORTED_MODULE_5__common_common_service__["a" /* CommonService */]));



/***/ }),

/***/ "../../../../../src/app/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\n  <div class=\"card-header\">\n    {{pageTitle}}\n  </div>\n\n  <div class=\"card-block\">\n    <form class=\"form-horizontal\" novalidate (ngSubmit)=\"login(loginForm)\" #loginForm=\"ngForm\" autocomplete=\"off\">\n      <fieldset>\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (userNameVar.touched || \n                                               userNameVar.dirty) && \n                                               !userNameVar.valid }\">\n          <label class=\"col-md-2 control-label\" for=\"userNameId\">User Name</label>\n\n          <div class=\"col-md-12\"> \n            <input class=\"form-control\" id=\"userNameId\" type=\"text\" placeholder=\"User Name (required) - (test user: admin)\" required\n              (ngModel)=\"userName\" name=\"userName\" #userNameVar=\"ngModel\" />\n            <span class=\"help-block\" *ngIf=\"(userNameVar.touched ||\n                                                         userNameVar.dirty) &&\n                                                         userNameVar.errors\">\n              <span *ngIf=\"userNameVar.errors.required\">\n                User name is required.\n              </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\" [ngClass]=\"{'has-error': (passwordVar.touched || \n                                               passwordVar.dirty) && \n                                               !passwordVar.valid }\">\n          <label class=\"col-md-2 control-label\" for=\"passwordId\">Password</label>\n\n          <div class=\"col-md-12\">\n            <input class=\"form-control\" id=\"passwordId\" type=\"password\" placeholder=\"Password (required) - (test Password: admin)\" required\n              (ngModel)=\"password\" name=\"password\" #passwordVar=\"ngModel\" value=\"admin\" />\n            <span class=\"help-block\" *ngIf=\"(passwordVar.touched ||\n                                                         passwordVar.dirty) &&\n                                                         passwordVar.errors\">\n              <span *ngIf=\"passwordVar.errors.required\">\n                Password is required.\n              </span>\n            </span>\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <div class=\"col-md-4 col-md-offset-2\">\n            <span>\n              <button class=\"btn btn-primary\" type=\"submit\" style=\"width:80px;margin-right:10px\" [disabled]=\"!loginForm.valid\">\n                Log In\n              </button>\n            </span>\n            <span>\n              <a class=\"btn btn-default\" [routerLink]=\"['/welcome']\">\n                Cancel\n              </a>\n            </span>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n    <div class=\"has-error\" *ngIf=\"errorMessage\">{{errorMessage}}</div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__ = __webpack_require__("../../../../../src/app/user/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.pageTitle = "Log In";
        this.userName = "admin";
    }
    LoginComponent.prototype.login = function (loginForm) {
        var _this = this;
        if (loginForm && loginForm.valid) {
            var userName = loginForm.form.value.userName;
            var password = loginForm.form.value.password;
            this.authService.login(userName, password).subscribe(function (user) {
                if (_this.authService.redirectUrl) {
                    _this.router.navigateByUrl(_this.authService.redirectUrl);
                }
                else {
                    _this.router.navigate(["/tasks"]);
                }
            }, function (error) { return alert(error); });
        }
        else {
            this.errorMessage = "Please enter a user name and password.";
        }
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "login",
            template: __webpack_require__("../../../../../src/app/user/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["g" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-detail/user-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-detail/user-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">USER DETAIL</div>\n  <div class=\"card-block\">USER block</div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user-detail/user-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDetailComponent = (function () {
    function UserDetailComponent() {
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    UserDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-detail',
            template: __webpack_require__("../../../../../src/app/user/user-detail/user-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-detail/user-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-header\">User Detail</div>\n  <div class=\"card-block\">\n    <form>\n      <div class=\"form-group row\">\n        <div class=\"col-md-2 col-form-label\">userName:</div>\n        <div class=\"col-md-6\">\n          <input name=\"userName\" [(ngModel)]=\"user.userName\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-2 col-form-label\">passWord:</div>\n        <div class=\"col-md-6\">\n            <input name=\"userName\" [(ngModel)]=\"user.passWord\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-2 col-form-label\">fullName:</div>\n        <div class=\"col-md-6\">\n            <input name=\"userName\" [(ngModel)]=\"user.fullName\">\n        </div>\n      </div>\n      <div class=\"form-group row\">\n        <div class=\"col-md-2 col-form-label\">isAdmin:</div>\n        <div class=\"col-md-6\">\n            <input name=\"userName\" type=\"checkbox\" [(ngModel)]=\"user.isAdmin\">\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-edit/user-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_user_auth_service_auth_service__ = __webpack_require__("../../../../../src/app/user/auth-service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEditComponent = (function () {
    function UserEditComponent(authService) {
        this.user = {};
        this.user = authService.currentUser || {};
    }
    UserEditComponent.prototype.ngOnInit = function () {
    };
    UserEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-edit',
            template: __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_app_user_auth_service_auth_service__["a" /* AuthService */]])
    ], UserEditComponent);
    return UserEditComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  user-list works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/user/user-list/user-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserListComponent = (function () {
    function UserListComponent() {
    }
    UserListComponent.prototype.ngOnInit = function () {
    };
    UserListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user-list',
            template: __webpack_require__("../../../../../src/app/user/user-list/user-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user-list/user-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_list_user_list_component__ = __webpack_require__("../../../../../src/app/user/user-list/user-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_service_auth_service__ = __webpack_require__("../../../../../src/app/user/auth-service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_guard_auth_guard_service__ = __webpack_require__("../../../../../src/app/user/auth-guard/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_detail_user_detail_component__ = __webpack_require__("../../../../../src/app/user/user-detail/user-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_user_user_edit_user_edit_component__ = __webpack_require__("../../../../../src/app/user/user-edit/user-edit.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["h" /* RouterModule */].forChild([{
                        path: 'users',
                        component: __WEBPACK_IMPORTED_MODULE_4__user_list_user_list_component__["a" /* UserListComponent */]
                    }, {
                        path: 'users/:id/edit',
                        component: __WEBPACK_IMPORTED_MODULE_9_app_user_user_edit_user_edit_component__["a" /* UserEditComponent */]
                    }, {
                        path: 'login',
                        component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */]
                    }])
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_9_app_user_user_edit_user_edit_component__["a" /* UserEditComponent */], __WEBPACK_IMPORTED_MODULE_4__user_list_user_list_component__["a" /* UserListComponent */], __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_8__user_detail_user_detail_component__["a" /* UserDetailComponent */]],
            providers: [__WEBPACK_IMPORTED_MODULE_6__auth_service_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_7__auth_guard_auth_guard_service__["a" /* AuthGuardService */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-default\">\n    <div class=\"card-header\">\n        {{pageTitle}}\n    </div> \n    <div class=\"card-block\">\n        <div class=\"row\">\n            <img src=\"../assets/images/logo.png\" class=\"img-fluid mx-auto\" style=\"max-height:300px;padding-bottom:50px\" />\n        </div>\n    </div>\n    <div class=\"card-footer\">\n        <div class=\"text-center\">Developed by:</div>\n        <h3 class=\"text-center\">Michele Dibenedetto</h3>\n\n        <div class=\"text-center\">@MicheleDibenedetto</div>\n        <div class=\"text-center\">\n            <a href=\"http://www.linkedin.com/profile/view?id=71738268\">My linkedin profile</a>\n        </div>\n\n        \n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
        this.pageTitle = 'Welcome';
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'welcome',
            template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map