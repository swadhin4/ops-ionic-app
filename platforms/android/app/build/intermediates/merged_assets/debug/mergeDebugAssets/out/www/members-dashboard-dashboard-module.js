(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-dashboard-dashboard-module"],{

/***/ "./src/app/members/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPageModule", function() { return DashboardPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _dashboard_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard.page */ "./src/app/members/dashboard/dashboard.page.ts");







var routes = [
    {
        path: '',
        component: _dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]
    }
];
var DashboardPageModule = /** @class */ (function () {
    function DashboardPageModule() {
    }
    DashboardPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_dashboard_page__WEBPACK_IMPORTED_MODULE_6__["DashboardPage"]]
        })
    ], DashboardPageModule);
    return DashboardPageModule;
}());



/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.html":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<link href=\"assets/css/bootstrap.min.css\" rel=\"stylesheet\">\n<link href=\"assets/dist/font-awesome-4.4.0/css/font-awesome.min.css\"rel=\"stylesheet\">\n<link href=\"assets/css/AdminLTE.min.css\" rel=\"stylesheet\">\n<link href=\"assets/css/bootstrap-material-design.min.css\"\trel=\"stylesheet\">\n<link href=\"assets/css/MaterialAdminLTE.min.css\" rel=\"stylesheet\">\n<link href=\"https://fonts.googleapis.com/icon?family=Material+Icons\"\n      rel=\"stylesheet\">\n<link href=\"assets/css/materialize.min.css\" rel=\"stylesheet\">\n<link href=\"assets/css/style.css\" rel=\"stylesheet\">\n<ion-header>\n   <ion-toolbar color=\"primary\">\n      <ion-title class=\"titleHeader\">Dashboard</ion-title>\n      <ion-buttons slot=\"end\" >\n         <ion-button (click)=\"logout()\">\n    \t\t<i class=\"fa fa-sign-out fa-2x\" aria-hidden=\"true\"></i>\n        </ion-button>\n      </ion-buttons>\n   </ion-toolbar>\n</ion-header>\n<ion-content>\n\t<div class=\"row\">\n      <div class=\"col s6 m6 l6 xl3\">\n         <div class=\"card gradient-45deg-light-blue-cyan gradient-shadow min-height-100 white-text animate fadeLeft\">\n          <a href=\"javascript:void(0)\" (click)=\"sitePage()\">  <div class=\"padding-4 center\" >\n                  <i class=\"fa fa-sitemap  background-round mt-5 \" aria-hidden=\"true\"></i>\n                  <p>150</p>\n                  <p>Sites</p>\n            </div>\n            </a>\n         </div>\n      </div>\n      <div class=\"col s6 m6 l6 xl3\">\n         <div class=\"card gradient-45deg-red-pink gradient-shadow min-height-100 white-text animate fadeLeft\">\n            \t<div class=\"padding-4 center\">\n                  <i class=\"fa fa-user  background-round mt-5\" aria-hidden=\"true\"></i>\n                  <p>50</p>\n                  <p>Service Orgs.</p>\n               </div>\n            </div>\n         </div>\n      <div class=\"col s6 m6 l6 xl3\">\n         <div class=\"card gradient-45deg-amber-amber gradient-shadow min-height-100 white-text animate fadeRight\">\n            <div class=\"padding-4 center\">\n                  <i class=\"fa fa-building  background-round mt-5\" aria-hidden=\"true\"></i>\n                    <p>350</p>\n                  <p>Clients</p>\n            </div>\n         </div>\n      </div>\n      <div class=\"col s6 m6 l6 xl3\">\n         <div class=\"card gradient-45deg-green-teal gradient-shadow min-height-100 white-text animate fadeRight\">\n            <div class=\"padding-4 center\">\n                  <i class=\"fa fa-users background-round mt-5\"></i>\n                   <p>3350</p>\n                  <p>Visitors</p>\n            </div>\n         </div>\n      </div>\n   </div>\n      <div class=\"row\">\n      \t<div class=\"col-md-4\">\n          <!-- Info Boxes Style 2 -->\n          <div class=\"info-box bg-yellow\">\n            <span class=\"info-box-icon\"><i class=\"fa fa-ticket\" aria-hidden=\"true\"></i></span>\n          \t<a href=\"javascript:void(0)\" (click)=\"incidentPage()\">  <div class=\"info-box-content\">\n              <span class=\"info-box-text\">Company Incidents</span>\n              <span class=\"info-box-number\">5,200</span>\n              <span class=\"progress-description\">\n                    Created by company\n                  </span>\n            </div>\n            </a>\n          </div>\n          <!-- /.info-box -->\n          <div class=\"info-box bg-green\">\n            <span class=\"info-box-icon\"><i class=\"fa fa-ticket\" aria-hidden=\"true\"></i></span>\n\n            <div class=\"info-box-content\">\n              <span class=\"info-box-text\">RSP Incidents</span>\n              <span class=\"info-box-number\">92,050</span>\n              <span class=\"progress-description\">\n                      Created by Registered Service Provider\n                  </span>\n            </div>\n          </div>\n        </div>\n      </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvZGFzaGJvYXJkL2Rhc2hib2FyZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/members/dashboard/dashboard.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/dashboard/dashboard.page.ts ***!
  \*****************************************************/
/*! exports provided: DashboardPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardPage", function() { return DashboardPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");





var DashboardPage = /** @class */ (function () {
    function DashboardPage(authenticationService, toastService, router) {
        this.authenticationService = authenticationService;
        this.toastService = toastService;
        this.router = router;
    }
    DashboardPage.prototype.ngOnInit = function () {
    };
    DashboardPage.prototype.logout = function () {
        this.authenticationService.logout();
        this.toastService.showSuccessToast("User Successfully logged out");
    };
    DashboardPage.prototype.incidentPage = function () {
        var _this = this;
        this.authenticationService.authenticationState.subscribe(function (state) {
            if (state) {
                _this.router.navigate(['members/incident']);
            }
            else {
                _this.router.navigate(['login']);
            }
        });
    };
    DashboardPage.prototype.sitePage = function () {
        var _this = this;
        this.authenticationService.authenticationState.subscribe(function (state) {
            if (state) {
                _this.router.navigate(['members/site']);
            }
            else {
                _this.router.navigate(['login']);
            }
        });
    };
    DashboardPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.page.html */ "./src/app/members/dashboard/dashboard.page.html"),
            styles: [__webpack_require__(/*! ./dashboard.page.scss */ "./src/app/members/dashboard/dashboard.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DashboardPage);
    return DashboardPage;
}());



/***/ })

}]);
//# sourceMappingURL=members-dashboard-dashboard-module.js.map