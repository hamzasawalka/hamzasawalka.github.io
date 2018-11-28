(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  \n  <test></test>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'example';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./test/test.component */ "./src/app/test/test.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _test_test_component__WEBPACK_IMPORTED_MODULE_4__["TestComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/test/test.component.css":
/*!*****************************************!*\
  !*** ./src/app/test/test.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1 {\n    text-align: center;\n}\n#nav span button {\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    text-align: center;\n    border-radius: 30%;\n}\n#body {\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: space-evenly;\n }\n.enlarged {\n     z-index: 1;\n }\n/* The Modal (background) */\n.modal {\n     display: none; /* Hidden by default */\n     position: fixed; /* Stay in place */\n     z-index: 1; /* Sit on top */\n     padding-top: 100px; /* Location of the box */\n     left: 0;\n     top: 0;\n     width: 100%; /* Full width */\n     height: 100%; /* Full height */\n     overflow: auto; /* Enable scroll if needed */\n     background-color: rgb(0,0,0); /* Fallback color */\n     background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\n }\n#nav {\n    display: flex;\n    justify-content: space-around;\n    padding-top: 50px;\n    padding-bottom: 100px;\n    background:\n    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,\n    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,\n    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,\n    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,\n    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),\n    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);\n    background-color: #131313;\n    background-size: 20px 20px;\n }\n/* Modal Content (Image) */\n.modal-content {\n     margin: auto;\n     display: block;\n     width: 80%;\n     max-width: 700px;\n }\n/* Caption of Modal Image (Image Text) - Same Width as the Image */\n#caption {\n     margin: auto;\n     display: block;\n     width: 80%;\n     max-width: 700px;\n     text-align: center;\n     color: #ccc;\n     padding: 10px 0;\n     height: 150px;\n }\n/* Add Animation - Zoom in the Modal */\n.modal-content, #caption { \n     -webkit-animation-name: zoom; \n             animation-name: zoom;\n     -webkit-animation-duration: 0.6s;\n             animation-duration: 0.6s;\n }\n@-webkit-keyframes zoom {\n     from {-webkit-transform:scale(0);transform:scale(0)} \n     to {-webkit-transform:scale(1);transform:scale(1)}\n }\n@keyframes zoom {\n     from {-webkit-transform:scale(0);transform:scale(0)} \n     to {-webkit-transform:scale(1);transform:scale(1)}\n }\n/* The Close Button */\n.close {\n     position: absolute;\n     top: 15px;\n     right: 35px;\n     color: #f1f1f1;\n     font-size: 40px;\n     font-weight: bold;\n     transition: 0.3s;\n }\n.close:hover,\n .close:focus {\n     color: #bbb;\n     text-decoration: none;\n     cursor: pointer;\n }\n/* 100% Image Width on Smaller Screens */\n@media only screen and (max-width: 700px){\n     .modal-content {\n         width: 100%;\n     }\n }\n/* Background */\n#body {\n    background:\n    radial-gradient(black 15%, transparent 16%) 0 0,\n    radial-gradient(black 15%, transparent 16%) 8px 8px,\n    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 0 1px,\n    radial-gradient(rgba(255,255,255,.1) 15%, transparent 20%) 8px 9px;\n    background-color:#282828;\n    background-size:16px 16px;\n}\n.img {\n    width: 300px; \n    height: 300px; \n    border: 5px black solid; \n    border-radius: 5%; \n    cursor: zoom-in;\n    margin: 20px 20px;\n}\nh1 {\n    margin: 0;\n    padding: 10px 0;\n    color: white;\n    background:\n    linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,\n    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,\n    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,\n    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,\n    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),\n    linear-gradient(#1d1d1d 25%, #1a1a1a 25%, #1a1a1a 50%, transparent 50%, transparent 75%, #242424 75%, #242424);\n    background-color: #131313;\n    background-size: 20px 20px;\n}\n.btn-info:focus {\n    border: 0;\n    box-shadow: none;\n}\n.btn-info:disabled {\n    box-shadow: 0 0 0 0.2rem rgba(23, 162, 184, 0.5);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVzdC90ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7Q0FDdEI7QUFDRDtJQUNJLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7Q0FDdEI7QUFDQTtJQUNHLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsb0JBQW9CO0lBQ3BCLDhCQUE4QjtFQUNoQztBQUNEO0tBQ0ksV0FBVztFQUNkO0FBQ0QsNEJBQTRCO0FBQzVCO0tBQ0ksY0FBYyxDQUFDLHVCQUF1QjtLQUN0QyxnQkFBZ0IsQ0FBQyxtQkFBbUI7S0FDcEMsV0FBVyxDQUFDLGdCQUFnQjtLQUM1QixtQkFBbUIsQ0FBQyx5QkFBeUI7S0FDN0MsUUFBUTtLQUNSLE9BQU87S0FDUCxZQUFZLENBQUMsZ0JBQWdCO0tBQzdCLGFBQWEsQ0FBQyxpQkFBaUI7S0FDL0IsZUFBZSxDQUFDLDZCQUE2QjtLQUM3Qyw2QkFBNkIsQ0FBQyxvQkFBb0I7S0FDbEQsa0NBQWtDLENBQUMsc0JBQXNCO0VBQzVEO0FBQ0Q7SUFDRyxjQUFjO0lBQ2QsOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEI7Ozs7OzttSEFNK0c7SUFDL0csMEJBQTBCO0lBQzFCLDJCQUEyQjtFQUM3QjtBQUVELDJCQUEyQjtBQUMzQjtLQUNJLGFBQWE7S0FDYixlQUFlO0tBQ2YsV0FBVztLQUNYLGlCQUFpQjtFQUNwQjtBQUVELG1FQUFtRTtBQUNuRTtLQUNJLGFBQWE7S0FDYixlQUFlO0tBQ2YsV0FBVztLQUNYLGlCQUFpQjtLQUNqQixtQkFBbUI7S0FDbkIsWUFBWTtLQUNaLGdCQUFnQjtLQUNoQixjQUFjO0VBQ2pCO0FBRUQsdUNBQXVDO0FBQ3ZDO0tBQ0ksNkJBQXFCO2FBQXJCLHFCQUFxQjtLQUNyQixpQ0FBeUI7YUFBekIseUJBQXlCO0VBQzVCO0FBRUQ7S0FDSSxNQUFNLDJCQUFrQixBQUFsQixrQkFBa0IsQ0FBQztLQUN6QixJQUFJLDJCQUFrQixBQUFsQixrQkFBa0IsQ0FBQztFQUMxQjtBQUhEO0tBQ0ksTUFBTSwyQkFBa0IsQUFBbEIsa0JBQWtCLENBQUM7S0FDekIsSUFBSSwyQkFBa0IsQUFBbEIsa0JBQWtCLENBQUM7RUFDMUI7QUFFRCxzQkFBc0I7QUFDdEI7S0FDSSxtQkFBbUI7S0FDbkIsVUFBVTtLQUNWLFlBQVk7S0FDWixlQUFlO0tBQ2YsZ0JBQWdCO0tBQ2hCLGtCQUFrQjtLQUNsQixpQkFBaUI7RUFDcEI7QUFFRDs7S0FFSSxZQUFZO0tBQ1osc0JBQXNCO0tBQ3RCLGdCQUFnQjtFQUNuQjtBQUVELHlDQUF5QztBQUN6QztLQUNJO1NBQ0ksWUFBWTtNQUNmO0VBQ0o7QUFFRCxnQkFBZ0I7QUFDakI7SUFDSTs7Ozt1RUFJbUU7SUFDbkUseUJBQXlCO0lBQ3pCLDBCQUEwQjtDQUM3QjtBQUVEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7Q0FDckI7QUFFRDtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiOzs7Ozs7bUhBTStHO0lBQy9HLDBCQUEwQjtJQUMxQiwyQkFBMkI7Q0FDOUI7QUFFRDtJQUNJLFVBQVU7SUFDVixpQkFBaUI7Q0FDcEI7QUFFRDtJQUNJLGlEQUFpRDtDQUNwRCIsImZpbGUiOiJzcmMvYXBwL3Rlc3QvdGVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNuYXYgc3BhbiBidXR0b24ge1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzAlO1xufVxuICNib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuIH1cbiAuZW5sYXJnZWQge1xuICAgICB6LWluZGV4OiAxO1xuIH1cbiAvKiBUaGUgTW9kYWwgKGJhY2tncm91bmQpICovXG4gLm1vZGFsIHtcbiAgICAgZGlzcGxheTogbm9uZTsgLyogSGlkZGVuIGJ5IGRlZmF1bHQgKi9cbiAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBTdGF5IGluIHBsYWNlICovXG4gICAgIHotaW5kZXg6IDE7IC8qIFNpdCBvbiB0b3AgKi9cbiAgICAgcGFkZGluZy10b3A6IDEwMHB4OyAvKiBMb2NhdGlvbiBvZiB0aGUgYm94ICovXG4gICAgIGxlZnQ6IDA7XG4gICAgIHRvcDogMDtcbiAgICAgd2lkdGg6IDEwMCU7IC8qIEZ1bGwgd2lkdGggKi9cbiAgICAgaGVpZ2h0OiAxMDAlOyAvKiBGdWxsIGhlaWdodCAqL1xuICAgICBvdmVyZmxvdzogYXV0bzsgLyogRW5hYmxlIHNjcm9sbCBpZiBuZWVkZWQgKi9cbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsMCwwKTsgLyogRmFsbGJhY2sgY29sb3IgKi9cbiAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjkpOyAvKiBCbGFjayB3LyBvcGFjaXR5ICovXG4gfVxuICNuYXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgcGFkZGluZy10b3A6IDUwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwMHB4O1xuICAgIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCAjMTUxNTE1IDVweCwgdHJhbnNwYXJlbnQgNXB4KSAwIDVweCxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjA3ZGVnLCAjMTUxNTE1IDVweCwgdHJhbnNwYXJlbnQgNXB4KSAxMHB4IDBweCxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjdkZWcsICMyMjIgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDBweCAxMHB4LFxuICAgIGxpbmVhci1ncmFkaWVudCgyMDdkZWcsICMyMjIgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDEwcHggNXB4LFxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFiMWIxYiAxMHB4LCB0cmFuc3BhcmVudCAxMHB4KSxcbiAgICBsaW5lYXItZ3JhZGllbnQoIzFkMWQxZCAyNSUsICMxYTFhMWEgMjUlLCAjMWExYTFhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCA3NSUsICMyNDI0MjQgNzUlLCAjMjQyNDI0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xuIH1cbiBcbiAvKiBNb2RhbCBDb250ZW50IChJbWFnZSkgKi9cbiAubW9kYWwtY29udGVudCB7XG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIHdpZHRoOiA4MCU7XG4gICAgIG1heC13aWR0aDogNzAwcHg7XG4gfVxuIFxuIC8qIENhcHRpb24gb2YgTW9kYWwgSW1hZ2UgKEltYWdlIFRleHQpIC0gU2FtZSBXaWR0aCBhcyB0aGUgSW1hZ2UgKi9cbiAjY2FwdGlvbiB7XG4gICAgIG1hcmdpbjogYXV0bztcbiAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgIHdpZHRoOiA4MCU7XG4gICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgY29sb3I6ICNjY2M7XG4gICAgIHBhZGRpbmc6IDEwcHggMDtcbiAgICAgaGVpZ2h0OiAxNTBweDtcbiB9XG4gXG4gLyogQWRkIEFuaW1hdGlvbiAtIFpvb20gaW4gdGhlIE1vZGFsICovXG4gLm1vZGFsLWNvbnRlbnQsICNjYXB0aW9uIHsgXG4gICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tO1xuICAgICBhbmltYXRpb24tZHVyYXRpb246IDAuNnM7XG4gfVxuIFxuIEBrZXlmcmFtZXMgem9vbSB7XG4gICAgIGZyb20ge3RyYW5zZm9ybTpzY2FsZSgwKX0gXG4gICAgIHRvIHt0cmFuc2Zvcm06c2NhbGUoMSl9XG4gfVxuIFxuIC8qIFRoZSBDbG9zZSBCdXR0b24gKi9cbiAuY2xvc2Uge1xuICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgIHRvcDogMTVweDtcbiAgICAgcmlnaHQ6IDM1cHg7XG4gICAgIGNvbG9yOiAjZjFmMWYxO1xuICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuIH1cbiBcbiAuY2xvc2U6aG92ZXIsXG4gLmNsb3NlOmZvY3VzIHtcbiAgICAgY29sb3I6ICNiYmI7XG4gICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xuIH1cbiBcbiAvKiAxMDAlIEltYWdlIFdpZHRoIG9uIFNtYWxsZXIgU2NyZWVucyAqL1xuIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpe1xuICAgICAubW9kYWwtY29udGVudCB7XG4gICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgfVxuIH1cblxuIC8qIEJhY2tncm91bmQgKi9cbiNib2R5IHtcbiAgICBiYWNrZ3JvdW5kOlxuICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgMCAwLFxuICAgIHJhZGlhbC1ncmFkaWVudChibGFjayAxNSUsIHRyYW5zcGFyZW50IDE2JSkgOHB4IDhweCxcbiAgICByYWRpYWwtZ3JhZGllbnQocmdiYSgyNTUsMjU1LDI1NSwuMSkgMTUlLCB0cmFuc3BhcmVudCAyMCUpIDAgMXB4LFxuICAgIHJhZGlhbC1ncmFkaWVudChyZ2JhKDI1NSwyNTUsMjU1LC4xKSAxNSUsIHRyYW5zcGFyZW50IDIwJSkgOHB4IDlweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyODI4Mjg7XG4gICAgYmFja2dyb3VuZC1zaXplOjE2cHggMTZweDtcbn1cblxuLmltZyB7XG4gICAgd2lkdGg6IDMwMHB4OyBcbiAgICBoZWlnaHQ6IDMwMHB4OyBcbiAgICBib3JkZXI6IDVweCBibGFjayBzb2xpZDsgXG4gICAgYm9yZGVyLXJhZGl1czogNSU7IFxuICAgIGN1cnNvcjogem9vbS1pbjtcbiAgICBtYXJnaW46IDIwcHggMjBweDtcbn1cblxuaDEge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6XG4gICAgbGluZWFyLWdyYWRpZW50KDI3ZGVnLCAjMTUxNTE1IDVweCwgdHJhbnNwYXJlbnQgNXB4KSAwIDVweCxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjA3ZGVnLCAjMTUxNTE1IDVweCwgdHJhbnNwYXJlbnQgNXB4KSAxMHB4IDBweCxcbiAgICBsaW5lYXItZ3JhZGllbnQoMjdkZWcsICMyMjIgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDBweCAxMHB4LFxuICAgIGxpbmVhci1ncmFkaWVudCgyMDdkZWcsICMyMjIgNXB4LCB0cmFuc3BhcmVudCA1cHgpIDEwcHggNXB4LFxuICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzFiMWIxYiAxMHB4LCB0cmFuc3BhcmVudCAxMHB4KSxcbiAgICBsaW5lYXItZ3JhZGllbnQoIzFkMWQxZCAyNSUsICMxYTFhMWEgMjUlLCAjMWExYTFhIDUwJSwgdHJhbnNwYXJlbnQgNTAlLCB0cmFuc3BhcmVudCA3NSUsICMyNDI0MjQgNzUlLCAjMjQyNDI0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTMxMzEzO1xuICAgIGJhY2tncm91bmQtc2l6ZTogMjBweCAyMHB4O1xufVxuXG4uYnRuLWluZm86Zm9jdXMge1xuICAgIGJvcmRlcjogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWluZm86ZGlzYWJsZWQge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDIzLCAxNjIsIDE4NCwgMC41KTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/test/test.component.html":
/*!******************************************!*\
  !*** ./src/app/test/test.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Top Soccer Snapshots</h1>\n  \n  <div  id=\"body\" > </div>\n  <!-- The Modal -->\n<div id=\"myModal\" class=\"modal\">\n\n  <!-- The Close Button -->\n  <span class=\"close\">&times;</span>\n\n  <!-- Modal Content (The Image) -->\n  <img class=\"modal-content\" id=\"img01\">\n\n  <!-- Modal Caption (Image Text) -->\n  <div id=\"caption\"></div>\n</div>\n\n<div id=\"nav\">\n  <span class=\"nav-left\">\n      <button (click)=\"nav(1)\" id=\"first\" [disabled]=\"pageNo == 1\"> << </button>\n    <button (click)=\"nav(pageNo - 1)\" id=\"prev\" [disabled]=\"pageNo == 1\" ><</button>\n  </span>\n  <span class=\"nav-center\">\n    <button [disabled]=\"pageNo == pageBtns[0]\" (click)=\"nav(pageBtns[0])\">{{ pageBtns[0] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[1]\" (click)=\"nav(pageBtns[1])\">{{ pageBtns[1] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[2]\" (click)=\"nav(pageBtns[2])\">{{ pageBtns[2] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[3]\" (click)=\"nav(pageBtns[3])\">{{ pageBtns[3] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[4]\" (click)=\"nav(pageBtns[4])\">{{ pageBtns[4] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[5]\" (click)=\"nav(pageBtns[5])\">{{ pageBtns[5] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[6]\" (click)=\"nav(pageBtns[6])\">{{ pageBtns[6] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[7]\" (click)=\"nav(pageBtns[7])\">{{ pageBtns[7] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[8]\" (click)=\"nav(pageBtns[8])\">{{ pageBtns[8] }}</button>\n    <button [disabled]=\"pageNo == pageBtns[9]\" (click)=\"nav(pageBtns[9])\">{{ pageBtns[9] }}</button>\n  </span>\n  <span class=\"nav-right\">\n    <button (click)=\"nav(pageNo + 1)\" id=\"next\" >></button>\n    \n  </span>\n</div>\n  \n"

/***/ }),

/***/ "./src/app/test/test.component.ts":
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

// Don't forget to import these in the module!


var TestComponent = /** @class */ (function () {
    function TestComponent(http) {
        this.http = http;
        this.title = 'Photos';
        this.AllPhotoLinks = [];
        this.pageNo = 1;
        this.pageBtns = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this.imgStyles = "\n      width: 300px; \n      height: 300px; \n      border: 5px black solid; \n      border-radius: 5%; \n      cursor: zoom-in;\n      margin: 20px 20px;\n    ";
    }
    TestComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.getPhotos(this.pageNo);
                jquery__WEBPACK_IMPORTED_MODULE_2__('.nav-center').children().addClass('btn btn-info');
                jquery__WEBPACK_IMPORTED_MODULE_2__('#prev, #next').addClass('btn btn-info');
                jquery__WEBPACK_IMPORTED_MODULE_2__('#first, #last').addClass('btn btn-primary');
                jquery__WEBPACK_IMPORTED_MODULE_2__('.img-con').addClass('img');
                return [2 /*return*/];
            });
        });
    };
    TestComponent.prototype.nav = function (page) {
        var no = parseInt(page); // variable initialization
        this.pageNo = no;
        // for the beginning and the ending parts of the nav
        if (no < 5) {
            for (var i = 0; i < this.pageBtns.length; i++) {
                this.pageBtns[i] = i + 1;
            }
        }
        else if (no > this.pageLimit - 5) {
            for (var i = 0; i < this.pageBtns.length; i++) {
                this.pageBtns[i] = (this.pageLimit - 9) + i;
            }
        }
        else {
            for (var i = -4; i < 6; i++) {
                this.pageBtns[i + 4] = no + i;
            }
        }
        console.log(this.pageNo);
        this.getPhotos(no);
    };
    TestComponent.prototype.getPhotos = function (page) {
        var _this = this;
        return new Promise(function (resolve, rej) {
            var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=10a341066aefdd9e971da9afa18624ad&tags=soccer&format=json&nojsoncallback=true&per_page=10&page=" + page;
            _this.http.get(url)
                .subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
                rej(err);
            });
        }).then(function (data) {
            _this.AllPhotoLinks = [];
            _this.pageLimit = parseInt(data['photos'].pages);
            data['photos'].photo.forEach(function (element) {
                _this.AllPhotoLinks.push("https://farm" + element["farm"] + ".staticflickr.com/" + element["server"] + "/" + element['id'] + "_" + element['secret'] + ".jpg");
            });
        }).then(function (data) {
            _this.generateTags();
        });
    };
    TestComponent.prototype.generateTags = function () {
        var _this = this;
        jquery__WEBPACK_IMPORTED_MODULE_2__('#body').html('');
        this.AllPhotoLinks.forEach(function (e) {
            document.getElementById('body').innerHTML += "\n            <div  class=\"img-con\" (click)=\"console.log(1)\"\n            style=\"" + _this.imgStyles + " background-image: url(" + e + ");\" ></div>\n            ";
        });
        var modal = document.getElementById('myModal');
        var modalImg = document.getElementById("img01");
        jquery__WEBPACK_IMPORTED_MODULE_2__(".img-con").click(function () {
            modal.style.display = "block";
            modalImg['src'] = this.style.backgroundImage.split('"')[1];
        });
        // When the user clicks on <span> (x), close the modal
        jquery__WEBPACK_IMPORTED_MODULE_2__('.close').click(function () {
            modal.style.display = "none";
        });
        jquery__WEBPACK_IMPORTED_MODULE_2__(".img-con").mouseenter(function () {
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).fadeOut(100);
            jquery__WEBPACK_IMPORTED_MODULE_2__(this).fadeIn(500);
        });
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.css */ "./src/app/test/test.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/ng/example/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map