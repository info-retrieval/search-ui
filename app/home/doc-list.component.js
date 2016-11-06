"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var api_service_1 = require('../api.service');
var DocListComponent = (function () {
    function DocListComponent(api, route) {
        this.api = api;
        this.route = route;
        this.model = { search: "" };
    }
    DocListComponent.prototype.ngOnInit = function () {
        this.getAllDocs();
    };
    DocListComponent.prototype.getAllDocs = function () {
        var _this = this;
        this.from = 0;
        this.api.getAllDocs(this.from)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.docs = data; console.log(_this.from); }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    DocListComponent.prototype.onPrev = function () {
        var _this = this;
        if (this.from > 10) {
            this.from = parseInt(this.from) - 10;
            this.api.getAllDocs(this.from)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { _this.docs = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        }
    };
    DocListComponent.prototype.onNext = function () {
        var _this = this;
        this.from = parseInt(this.from) + 10;
        this.api.getAllDocs(this.from)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { _this.docs = data; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
    };
    DocListComponent.prototype.onSubmit = function () {
        var _this = this;
        this.from = 0;
        console.log(this.model.search);
        if (this.model.search.length > 0) {
            this.api.getDocsFromSearch(this.model.search)
                .map(function (res) { return res.json(); })
                .subscribe(function (data) { _this.docs = data; _this.hasMore = _this.docs.length > 10; }, function (err) { return console.error(err); }, function () { return console.log('done'); });
        }
        else {
            this.getAllDocs();
        }
    };
    DocListComponent.prototype.onSelect = function (docId) {
        this.selected = this.docs.filter(function (doc) { return doc.id === docId; })[0];
        console.log(this.selected);
    };
    DocListComponent = __decorate([
        core_1.Component({
            selector: 'doc-list',
            styleUrls: ['./app/home/doc-list.component.css'],
            templateUrl: './app/home/doc-list.component.html'
        }), 
        __metadata('design:paramtypes', [api_service_1.ApiService, router_1.ActivatedRoute])
    ], DocListComponent);
    return DocListComponent;
}());
exports.DocListComponent = DocListComponent;
//# sourceMappingURL=doc-list.component.js.map