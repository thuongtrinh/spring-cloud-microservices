webpackJsonp([1,4],{

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".custom-close {\n  float:right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".custom-close {\n  float:right;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "div.progress {\n  margin-top: 5px;\n}\n\n.rating:hover {\n  border: solid blue;\n}\n\n.selected {\n  border: solid blue;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse\">\n  <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <a class=\"navbar-brand\" href=\"#\">Book Rater <span *ngIf=\"principal.isAdmin()\">Admin</span></a>\n  <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\n    <ul class=\"navbar-nav mr-auto\">\n    </ul>\n    <button *ngIf=\"principal.authenticated\" type=\"button\" class=\"btn btn-link\" (click)=\"onLogout()\">Logout</button>\n  </div>\n</nav>\n\n<div class=\"jumbotron\">\n  <div class=\"container\">\n    <h1>Book Rater App</h1>\n    <p *ngIf=\"!principal.authenticated\" class=\"lead\">Anyone can view the books.</p>\n    <p *ngIf=\"principal.authenticated && !principal.isAdmin()\" class=\"lead\">Users can view and create ratings</p>\n    <p *ngIf=\"principal.isAdmin()\"  class=\"lead\">Admins can do anything!</p>\n  </div>\n</div>\n\n<section class=\"books\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-md\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <app-book-list [principal]=\"principal\" (onBookSelected)=\"selectBook($event)\"></app-book-list>\n          </div>\n        </div>\n      </div>\n      <div *ngIf=\"selectedBook != null\" class=\"col-md-3\">\n        <app-book-detail [selectedBook]=\"selectedBook\" [principal]=\"principal\" (closeBook)=\"closeBookDetail()\"></app-book-detail>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <div class=\"card-block\">\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeBookDetail()\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n    <h4 class=\"card-title\">Title: {{selectedBook.title}}</h4>\n    <h6 class=\"card-subtitle mb-2 text-muted\">Author: {{selectedBook.author}}</h6>\n    <p class=\"card-text\">A quick summary of the book</p>\n    <app-rating *ngIf=\"principal.authenticated\" [bookId]=\"selectedBook.id\" [principal]=\"principal\"></app-rating>\n  </div>\n</div>\n"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" *ngFor=\"let book of books; let i = index;\" (click)=\"selectBook(book)\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <div *ngIf=\"booksToEdit.indexOf(i) === -1 ; then bookView else bookEdit\"></div>\n      <ng-template #bookView>\n        <button appClickStopPropagation *ngIf=\"principal.isAdmin()\" type=\"button\" class=\"btn btn-danger custom-close\" (click)=\"delete(i)\">Delete</button>\n        <button appClickStopPropagation *ngIf=\"principal.isAdmin()\" type=\"button\" class=\"btn btn-warning custom-close\" (click)=\"editBook(i)\">Edit</button>\n        <h4 class=\"card-title\">Title: {{book.title}}</h4>\n        <h6 class=\"card-subtitle mb-2 text-muted\">Author: {{book.author}}</h6>\n      </ng-template>\n      <ng-template #bookEdit>\n        <button appClickStopPropagation type=\"button\" class=\"btn btn-secondary custom-close\" (click)=\"cancelEditBook(i)\">Cancel</button>\n        <form appClickStopPropagation (ngSubmit)=\"saveBook(i, newBooks[i])\" class=\"mt-2 mt-md-0\" #f1=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"title\">Title:</label>\n            <input id=\"title\" name=\"title\" [(ngModel)]=\"newBooks[i].title\" required class=\"form-control mr-sm-2\" type=\"text\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"author\">Author:</label>\n            <input id=\"author\" name=\"author\" [(ngModel)]=\"newBooks[i].author\" required class=\"form-control mr-sm-2\" type=\"text\">\n          </div>\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" [disabled]=\"!f1.valid\">Save</button>\n        </form>\n      </ng-template>\n\n    </div>\n  </div>\n</div>\n<div *ngIf=\"principal.isAdmin()\" class=\"col-md-12\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n      <div *ngIf=\"!isAddNewBook; then bookPlaceHolder else bookAdd\"></div>\n      <ng-template #bookPlaceHolder>\n        <h4 (click)=\"activateAddNewBook()\" class=\"card-title center-block\">Add New Book</h4>\n      </ng-template>\n      <ng-template #bookAdd>\n        <button appClickStopPropagation type=\"button\" class=\"btn btn-secondary custom-close\" (click)=\"cancelAddBook()\">Cancel</button>\n        <form appClickStopPropagation (ngSubmit)=\"addNewBook(newBook, titleNewBook)\" class=\"mt-2 mt-md-0\" #f2=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"titleNewBook\">Title:</label>\n            <input id=\"titleNewBook\" name=\"title\" [(ngModel)]=\"newBook.title\" required class=\"form-control mr-sm-2\" type=\"text\" #titleNewBook>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"authorNewBook\">Author:</label>\n            <input id=\"authorNewBook\" name=\"author\" [(ngModel)]=\"newBook.author\" required class=\"form-control mr-sm-2\" type=\"text\">\n          </div>\n          <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\" [disabled]=\"!f2.valid\">Save</button>\n        </form>\n      </ng-template>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "Ratings:\n<div *ngFor=\"let rating of ratings; let i = index;\" class=\"row\">\n  <div class=\"col-md-10\">\n    <div class=\"progress\"  [ngClass]=\"{'selected': principal.isAdmin() && rating === newRating, 'rating': principal.isAdmin()}\" (click)=\"selectRating(rating)\">\n      <div class=\"progress-bar bg-success\" role=\"progressbar\" [style.width]=\"findWidth(rating)\" [attr.aria-valuenow]=\"rating.stars\" aria-valuemin=\"0\" aria-valuemax=\"5\"></div>\n    </div>\n  </div>\n  <div class=\"col-md-1\">\n    <button *ngIf=\"principal?.isAdmin()\" type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"deleteRating(i)\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n</div>\n\n<form (ngSubmit)=\"onSaveRating(f)\" #f=\"ngForm\">\n  <div class=\"form-check form-check-inline\" *ngFor=\"let star of stars; let i = index;\">\n    <label  class=\"form-check-label\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"star\" [(ngModel)]=\"newRating.stars\" [value]=\"star\">{{star}}\n    </label>\n  </div>\n  <button *ngIf=\"newRating.id === null\" type=\"submit\" class=\"btn btn-secondary\" [disabled]=\"!f.valid\">Add Rating</button>\n  <button *ngIf=\"principal.isAdmin() && newRating.id !== null\" type=\"button\" class=\"btn btn-secondary\" (click)=\"updateRating()\">Save</button>\n  <button *ngIf=\"principal.isAdmin() && newRating.id !== null\" type=\"button\" class=\"btn btn-secondary\" (click)=\"cancelSelection()\">Cancel</button>\n</form>\n\n"

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.me = function () {
        return this.http.get("/me", this.makeOptions());
    };
    HttpService.prototype.logout = function () {
        return this.http.post("/logout", '', this.makeOptions());
    };
    HttpService.prototype.getBooks = function () {
        return this.http.get("/book-service/books", this.makeOptions());
    };
    HttpService.prototype.updateBook = function (newBook) {
        return this.http.put("/book-service/books/" + newBook.id, newBook, this.makeOptions());
    };
    HttpService.prototype.deleteBook = function (book) {
        return this.http.delete("/book-service/books/" + book.id, this.makeOptions());
    };
    HttpService.prototype.createBook = function (newBook) {
        return this.http.post("/book-service/books", newBook, this.makeOptions());
    };
    HttpService.prototype.getRatings = function (bookId) {
        return this.http.get("/rating-service/ratings?bookId=" + bookId, this.makeOptions());
    };
    HttpService.prototype.createRating = function (rating) {
        return this.http.post("/rating-service/ratings", rating, this.makeOptions());
    };
    HttpService.prototype.deleteRating = function (ratingId) {
        return this.http.delete("/rating-service/ratings/" + ratingId, this.makeOptions());
    };
    HttpService.prototype.updateRating = function (rating) {
        return this.http.put("/rating-service/ratings/" + rating.id, rating, this.makeOptions());
    };
    HttpService.prototype.makeOptions = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
    };
    return HttpService;
}());
HttpService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], HttpService);

var _a;
//# sourceMappingURL=http.service.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Principal; });
/* unused harmony export Authority */
var Principal = (function () {
    function Principal(authenticated, authorities) {
        var _this = this;
        this.authorities = [];
        this.authenticated = authenticated;
        authorities.map(function (auth) { return _this.authorities.push(new Authority(auth.authority)); });
    }
    Principal.prototype.isAdmin = function () {
        return this.authorities.some(function (auth) { return auth.authority.indexOf('ADMIN') > -1; });
    };
    return Principal;
}());

var Authority = (function () {
    function Authority(authority) {
        this.authority = authority;
    }
    return Authority;
}());

//# sourceMappingURL=principal.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(id, author, title) {
        this.id = id;
        this.author = author;
        this.title = title;
    }
    return Book;
}());

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(93);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__principal__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__http_service__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(httpService) {
        this.httpService = httpService;
        this.selectedBook = null;
        this.principal = new __WEBPACK_IMPORTED_MODULE_0__principal__["a" /* Principal */](false, []);
        this.loginFailed = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.me()
            .subscribe(function (response) {
            var principalJson = response.json();
            _this.principal = new __WEBPACK_IMPORTED_MODULE_0__principal__["a" /* Principal */](principalJson.authenticated, principalJson.authorities);
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.onLogout = function () {
        var _this = this;
        this.httpService.logout()
            .subscribe(function (response) {
            if (response.status === 200) {
                _this.loginFailed = false;
                _this.principal = new __WEBPACK_IMPORTED_MODULE_0__principal__["a" /* Principal */](false, []);
                window.location.replace(response.url);
            }
        }, function (error) {
            console.log(error);
        });
    };
    AppComponent.prototype.closeBookDetail = function () {
        this.selectedBook = null;
    };
    AppComponent.prototype.selectBook = function (book) {
        this.selectedBook = book;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(152),
        styles: [__webpack_require__(148)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__http_service__["a" /* HttpService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rating_rating_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__click_stop_propagation_directive__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_book_detail_book_detail_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__book_book_list_book_list_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__http_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__rating_rating_component__["a" /* RatingComponent */],
            __WEBPACK_IMPORTED_MODULE_6__click_stop_propagation_directive__["a" /* ClickStopPropagationDirective */],
            __WEBPACK_IMPORTED_MODULE_7__book_book_detail_book_detail_component__["a" /* BookDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_8__book_book_list_book_list_component__["a" /* BookListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__http_service__["a" /* HttpService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = (function () {
    function BookDetailComponent() {
        this.selectedBook = null;
        this.principal = null;
        this.closeBook = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    BookDetailComponent.prototype.ngOnInit = function () {
    };
    BookDetailComponent.prototype.closeBookDetail = function () {
        this.closeBook.emit(null);
    };
    return BookDetailComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book__["a" /* Book */]) === "function" && _a || Object)
], BookDetailComponent.prototype, "selectedBook", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* Principal */]) === "function" && _b || Object)
], BookDetailComponent.prototype, "principal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _c || Object)
], BookDetailComponent.prototype, "closeBook", void 0);
BookDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-book-detail',
        template: __webpack_require__(153),
        styles: [__webpack_require__(149)]
    }),
    __metadata("design:paramtypes", [])
], BookDetailComponent);

var _a, _b, _c;
//# sourceMappingURL=book-detail.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__principal__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookListComponent = (function () {
    function BookListComponent(httpService) {
        this.httpService = httpService;
        this.principal = null;
        this.onBookSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.books = [];
        this.newBooks = [];
        this.newBook = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](Math.floor(Math.random() * 1000), '', '');
        this.booksToEdit = [];
        this.isAddNewBook = false;
        this.selectedBook = null;
    }
    BookListComponent.prototype.ngOnInit = function () {
        this.loadBooks();
    };
    BookListComponent.prototype.loadBooks = function () {
        var _this = this;
        this.httpService.getBooks()
            .subscribe(function (response) {
            var booksJson = response.json();
            booksJson.forEach(function (book) {
                _this.books.push(new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](book.id, book.author, book.title));
                _this.newBooks.push(new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](book.id, book.author, book.title));
            });
        }, function (error) {
            console.log(error);
        });
    };
    BookListComponent.prototype.cancelEditBook = function (bookIndex) {
        if (this.booksToEdit.indexOf(bookIndex) !== -1) {
            this.booksToEdit.splice(this.booksToEdit.indexOf(bookIndex), 1); //remove the index of the book to edit
            //get the original book
            var bookCopy = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](this.books[bookIndex].id, this.books[bookIndex].author, this.books[bookIndex].title);
            this.newBooks.splice(bookIndex, 1, bookCopy); //replace the edited book with the old book
        }
    };
    BookListComponent.prototype.editBook = function (bookIndex) {
        this.booksToEdit.push(bookIndex);
    };
    BookListComponent.prototype.saveBook = function (bookIndex, newBook) {
        var _this = this;
        console.log(newBook);
        //save the book to the database
        this.httpService.updateBook(newBook)
            .subscribe(function (response) {
            var bookJson = response.json();
            var book = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](bookJson.id, bookJson.author, bookJson.title);
            //update the current array of books
            var bookArr = _this.books.find(function (b) { return b.id === book.id; });
            bookArr.title = book.title;
            bookArr.author = book.author;
            _this.booksToEdit.splice(_this.booksToEdit.indexOf(bookIndex), 1); //remove the index of the book to edit
        }, function (error) {
            console.log(error);
        });
    };
    BookListComponent.prototype.delete = function (bookIndex) {
        var _this = this;
        var book = this.books[bookIndex];
        this.httpService.deleteBook(book)
            .subscribe(function () {
            if (_this.selectedBook !== null && _this.books[bookIndex].id === _this.selectedBook.id) {
                _this.selectedBook = null;
                _this.onBookSelected.emit(_this.selectedBook);
            }
            _this.books.splice(bookIndex, 1); //remove the book at this index;
            _this.newBooks.splice(bookIndex, 1); //remove the editing book at this index
        }, function (error) {
            console.log(error);
        });
    };
    BookListComponent.prototype.activateAddNewBook = function () {
        this.isAddNewBook = true;
        this.newBook = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](null, '', '');
    };
    BookListComponent.prototype.addNewBook = function (newBook, element) {
        var _this = this;
        //write new book to db
        this.httpService.createBook(newBook)
            .subscribe(function (response) {
            var bookJson = response.json();
            var book = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](bookJson.id, bookJson.author, bookJson.title);
            console.log(book);
            _this.books.push(book);
            _this.newBooks.push(book);
            _this.newBook = new __WEBPACK_IMPORTED_MODULE_2__book__["a" /* Book */](Math.floor(Math.random() * 1000), '', '');
            element.focus();
        }, function (error) {
            console.log(error);
        });
    };
    BookListComponent.prototype.cancelAddBook = function () {
        this.isAddNewBook = false;
    };
    BookListComponent.prototype.selectBook = function (book) {
        this.selectedBook = book;
        this.onBookSelected.emit(book);
    };
    return BookListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__principal__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__principal__["a" /* Principal */]) === "function" && _a || Object)
], BookListComponent.prototype, "principal", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]) === "function" && _b || Object)
], BookListComponent.prototype, "onBookSelected", void 0);
BookListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-book-list',
        template: __webpack_require__(154),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _c || Object])
], BookListComponent);

var _a, _b, _c;
//# sourceMappingURL=book-list.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClickStopPropagationDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClickStopPropagationDirective = (function () {
    function ClickStopPropagationDirective() {
    }
    ClickStopPropagationDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    return ClickStopPropagationDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])("click", ["$event"]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ClickStopPropagationDirective.prototype, "onClick", null);
ClickStopPropagationDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* Directive */])({
        selector: '[appClickStopPropagation]'
    })
], ClickStopPropagationDirective);

//# sourceMappingURL=click-stop-propagation.directive.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Rating; });
var Rating = (function () {
    function Rating(id, bookId, stars) {
        this.id = id;
        this.bookId = bookId;
        this.stars = stars;
    }
    return Rating;
}());

//# sourceMappingURL=rating.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rating__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__principal__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__http_service__ = __webpack_require__(24);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RatingComponent = (function () {
    function RatingComponent(httpService) {
        this.httpService = httpService;
        this.principal = null;
        this.ratings = [];
        this.stars = [1, 2, 3, 4, 5];
        this.newRating = null;
    }
    RatingComponent.prototype.ngOnInit = function () { };
    RatingComponent.prototype.ngOnChanges = function () {
        this.newRating = new __WEBPACK_IMPORTED_MODULE_1__rating__["a" /* Rating */](null, this.bookId, 1);
        this.ratings = [];
        this.loadRatings();
    };
    RatingComponent.prototype.findWidth = function (rating) {
        var percent = (rating.stars / 5) * 100;
        return percent.toString() + '%';
    };
    RatingComponent.prototype.loadRatings = function () {
        var _this = this;
        this.httpService.getRatings(this.bookId)
            .subscribe(function (response) {
            var responseJson = response.json();
            responseJson.forEach(function (rating) { return _this.ratings.push(new __WEBPACK_IMPORTED_MODULE_1__rating__["a" /* Rating */](rating.id, rating.bookId, rating.stars)); });
        }, function (error) {
            console.log(error);
        });
    };
    RatingComponent.prototype.onSaveRating = function () {
        var _this = this;
        console.log(this.newRating);
        var ratingCopy = Object.assign({}, this.newRating);
        this.httpService.createRating(ratingCopy)
            .subscribe(function (response) {
            var ratingJson = response.json();
            _this.ratings.push(new __WEBPACK_IMPORTED_MODULE_1__rating__["a" /* Rating */](ratingJson.id, ratingJson.bookId, ratingJson.stars));
        }, function (error) {
            console.log(error);
        });
    };
    RatingComponent.prototype.updateRating = function () {
        var _this = this;
        this.httpService.updateRating(this.newRating)
            .subscribe(function () {
            _this.newRating = new __WEBPACK_IMPORTED_MODULE_1__rating__["a" /* Rating */](null, _this.bookId, 1);
        }, function (error) {
            console.log(error);
        });
    };
    RatingComponent.prototype.selectRating = function (rating) {
        if (this.principal.isAdmin()) {
            this.newRating = rating;
        }
    };
    RatingComponent.prototype.cancelSelection = function () {
        this.newRating = new __WEBPACK_IMPORTED_MODULE_1__rating__["a" /* Rating */](null, this.bookId, 1);
    };
    RatingComponent.prototype.deleteRating = function (index) {
        var _this = this;
        var rating = this.ratings[index];
        this.httpService.deleteRating(rating.id)
            .subscribe(function () {
            if (_this.ratings[index] === _this.newRating) {
                _this.newRating = new __WEBPACK_IMPORTED_MODULE_1__rating__["a" /* Rating */](null, _this.bookId, 1);
            }
            _this.ratings.splice(index, 1);
        }, function (error) {
            console.log(error);
        });
    };
    return RatingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], RatingComponent.prototype, "bookId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* Principal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__principal__["a" /* Principal */]) === "function" && _a || Object)
], RatingComponent.prototype, "principal", void 0);
RatingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-rating',
        template: __webpack_require__(155),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__http_service__["a" /* HttpService */]) === "function" && _b || Object])
], RatingComponent);

var _a, _b;
//# sourceMappingURL=rating.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[184]);
//# sourceMappingURL=main.bundle.js.map