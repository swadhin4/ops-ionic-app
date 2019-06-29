(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["public-login-login-module"],{

/***/ "./src/app/public/login/login.module.ts":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.module.ts ***!
  \**********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/public/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/public/login/login.page.html":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"assets/css/style.css\" rel=\"stylesheet\">\n<ion-header> <ion-toolbar> <img\n\tsrc=\"assets/logo.png\" alt=\"Logo\" id=\"logo\" class=\"center\"> <img\n\tsrc=\"assets/sigma.png\" class=\"center\" style=\"width:65%\"> </ion-toolbar> </ion-header>\n\n<ion-content>\n<div class=\"col s12\">\n\t<div class=\"container\" style=\"width:100%;margin-top: 40px;\">\n\t\t<div id=\"login-page\" class=\"row\">\n\t\t\t<p class=\"login-box-msg center\" style=\"text-align: center\">Sign in to start your session</p>\n\t\t\t<div class=\"col s12 m6 l4   border-radius-8  bg-opacity-8\">\n\t\t\t\t<form #form=\"ngForm\" (ngSubmit)=\"onSubmit(form)\">\n\t\t\t\t\t<ion-grid> <ion-row color=\"primary\"\n\t\t\t\t\t\tjustify-content-center> <ion-col align-self-center\n\t\t\t\t\t\tsize-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n\t\t\t\t\t\n\t\t\t\t\t<div >\n\t\t\t\t\t\t<ion-item> <ion-input name=\"email\" type=\"email\"\n\t\t\t\t\t\t\tplaceholder=\"Username\" ngModel required></ion-input> </ion-item>\n\t\t\t\t\t\t<ion-item> <ion-input name=\"password\" type=\"password\"\n\t\t\t\t\t\t\tplaceholder=\"Password\" ngModel required></ion-input> </ion-item>\n\t\t\t\t\t\t<ion-item> <ion-label>Login Type</ion-label> <ion-select name=\"type\"\n\t\t\t\t\t\t\tplaceholder=\"Select One\" ngModel required> <ion-select-option\n\t\t\t\t\t\t\tvalue=\"CUSTOMER\">(R) Customer</ion-select-option> <ion-select-option\n\t\t\t\t\t\t\tvalue=\"RSP\">(R) Service Provider</ion-select-option> <ion-select-option\n\t\t\t\t\t\t\tvalue=\"ESP\">(E) Service Provider</ion-select-option> </ion-select> </ion-item>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\t\t\t\t\t</ion-col> </ion-row> </ion-grid>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col s12 m12 l12 ml-2 mt-1\"></div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<ion-button size=\"large\" type=\"submit\" [disabled]=\"form.invalid\"\n\t\t\t\t\t\t\texpand=\"block\">Login</ion-button>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/public/login/login.page.scss":
/*!**********************************************!*\
  !*** ./src/app/public/login/login.page.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: block;\n  margin-left: auto;\n  margin-right: auto; }\n\n#logo {\n  width: 30%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHVibGljL2xvZ2luL0Y6XFxpb25pY1xcbXlBcHAvc3JjXFxhcHBcXHB1YmxpY1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR25CO0VBQ0QsVUFDQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHVibGljL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuIH1cclxuIFxyXG4gI2xvZ297XHJcbndpZHRoOjMwJVxyXG4gfSJdfQ== */"

/***/ }),

/***/ "./src/app/public/login/login.page.ts":
/*!********************************************!*\
  !*** ./src/app/public/login/login.page.ts ***!
  \********************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");






var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, route, router, authenticationService, toastService) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.toastService = toastService;
        this.loading = false;
        this.submitted = false;
    }
    LoginPage.prototype.ngOnInit = function () {
        /*
            * this.loginForm = this.formBuilder.group({ username: ['',
            * Validators.required], password: ['', Validators.required] }); // reset
            * login status this.authenticationService.logout(); // get return url from
            * route parameters or default to '/' this.returnUrl =
            * this.route.snapshot.queryParams['returnUrl'] || '/';
            */
    };
    LoginPage.prototype.onSubmit = function (form) {
        var _this = this;
        console.log(form.value);
        this.submitted = true;
        // stop here if form is invalid
        if (form.invalid) {
            return;
        }
        this.loading = true;
        this.credentials = form.value.email + ":" + form.value.password;
        this.authenticationService.login(this.credentials, form.value.type, "8999").then(function (res) {
            _this.responseData = res;
            console.log("Response : ", _this.responseData);
            _this.toastService.showSuccessToast("User Authenticated Successfully");
            _this.authenticationService.authenticationState.subscribe(function (state) {
                if (state) {
                    _this.router.navigate(['members/dashboard']);
                }
                else {
                    _this.router.navigate(['login']);
                }
            });
        }, function (err) {
            console.log("Response : ", err);
            _this.toastService.showErrorToast("Error logging in");
        });
    };
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.page.html */ "./src/app/public/login/login.page.html"),
            styles: [__webpack_require__(/*! ./login.page.scss */ "./src/app/public/login/login.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_1__["AuthenticationService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_5__["ToastService"]])
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=public-login-login-module.js.map