(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["members-incident-incident-module"],{

/***/ "./src/app/members/incident/incident.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/members/incident/incident.module.ts ***!
  \*****************************************************/
/*! exports provided: IncidentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentPageModule", function() { return IncidentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _incident_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./incident.page */ "./src/app/members/incident/incident.page.ts");







var routes = [
    {
        path: '',
        component: _incident_page__WEBPACK_IMPORTED_MODULE_6__["IncidentPage"]
    }
];
var IncidentPageModule = /** @class */ (function () {
    function IncidentPageModule() {
    }
    IncidentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_incident_page__WEBPACK_IMPORTED_MODULE_6__["IncidentPage"]]
        })
    ], IncidentPageModule);
    return IncidentPageModule;
}());



/***/ }),

/***/ "./src/app/members/incident/incident.page.html":
/*!*****************************************************!*\
  !*** ./src/app/members/incident/incident.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link href=\"assets/dist/font-awesome-4.4.0/css/font-awesome.min.css\"rel=\"stylesheet\">\n<link href=\"assets/css/materialize.min.css\" rel=\"stylesheet\">\n<link href=\"assets/css/style.css\" rel=\"stylesheet\">\n<style>\n\n</style>\n<ion-header>\n   <ion-toolbar color=\"primary\">\n   \t\t<ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n      <ion-title class=\"titleHeader\">Incident List</ion-title>\n   </ion-toolbar>\n</ion-header>\n<ion-content >\n <div class=\"row\">\n      <div class=\"col s12 m12 l6\">\n         <ul class=\"collection mb-0\" style=\"border: 0px solid #e0e0e0;\">\n               <li class=\"collection-item avatar\" *ngFor=\"let item of incidentList\">\n                  <img src=\"assets/img/ticket.png\" alt=\"\" class=\"circle\">\n                  <p class=\"font-weight-600\">{{item.ticketNumber}}</p>\n                  <p class=\"medium-small\">{{item.ticketStartTime}}</p>\n                  <a href=\"#!\" class=\"secondary-content\"><i class=\"material-icons\">star_border</i></a>\n               </li>\n            </ul>\n      </div>\n   </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/members/incident/incident.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/members/incident/incident.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbWJlcnMvaW5jaWRlbnQvaW5jaWRlbnQucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/members/incident/incident.page.ts":
/*!***************************************************!*\
  !*** ./src/app/members/incident/incident.page.ts ***!
  \***************************************************/
/*! exports provided: IncidentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentPage", function() { return IncidentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_incident_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/incident.service */ "./src/app/services/incident.service.ts");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/authentication.service */ "./src/app/services/authentication.service.ts");
/* harmony import */ var _services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/toast.service */ "./src/app/services/toast.service.ts");





var IncidentPage = /** @class */ (function () {
    function IncidentPage(incidentService, authenticationService, toastService) {
        this.incidentService = incidentService;
        this.authenticationService = authenticationService;
        this.toastService = toastService;
    }
    IncidentPage.prototype.ngOnInit = function () {
        var _this = this;
        var accessToken = "";
        this.authenticationService.getUser().then(function (res) {
            console.log(res);
            _this.incidentService.incidentList(res.accessToken, res.username).then(function (res) {
                _this.responseData = res;
                console.log("Response : ", _this.responseData);
                if (_this.responseData.statusCode == 200) {
                    _this.incidentList = _this.responseData.object;
                }
                //this.toastService.showSuccessToast("Incident list displayed");
            }, function (err) {
                console.log("Error : ", err);
                //this.toastService.showErrorToast("Unable to get incident list")
            });
        }, function (err) {
            console.log("Error : ", err);
            _this.toastService.showErrorToast("Unable to get user details");
        });
    };
    IncidentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incident',
            template: __webpack_require__(/*! ./incident.page.html */ "./src/app/members/incident/incident.page.html"),
            styles: [__webpack_require__(/*! ./incident.page.scss */ "./src/app/members/incident/incident.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_incident_service__WEBPACK_IMPORTED_MODULE_2__["IncidentService"],
            _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"]])
    ], IncidentPage);
    return IncidentPage;
}());



/***/ }),

/***/ "./src/app/services/incident.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/incident.service.ts ***!
  \**********************************************/
/*! exports provided: IncidentService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncidentService", function() { return IncidentService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var incidentListAPI = "http://localhost:8484/ops/api/incident/v1/list/extsp";
var IncidentService = /** @class */ (function () {
    function IncidentService(http) {
        this.http = http;
    }
    IncidentService.prototype.incidentList = function (accessToken, username) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new Headers();
            _this.http.get(incidentListAPI + "?access_token=" + accessToken + "&user=" + username)
                .subscribe(function (res) {
                resolve(res.json());
                var responseObj = res.json();
                console.log(responseObj);
            }, function (err) {
                reject(err);
            });
        });
    };
    IncidentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], IncidentService);
    return IncidentService;
}());



/***/ })

}]);
//# sourceMappingURL=members-incident-incident-module.js.map