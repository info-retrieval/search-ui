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
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var ApiService = (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.getAllDocs = function (from) {
        return this.makeRequest('list?from=' + from);
    };
    ApiService.prototype.getDocsFromSearch = function (query) {
        return this.makeRequest('search?term=' + query);
    };
    ApiService.prototype.makeRequest = function (path) {
        // let params = new URLSearchParams();
        // params.set('per_page', '100');
        var url = 'http://127.0.0.1:8000/search/' + path;
        return this.http.get(url);
    };
    ApiService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;
//# sourceMappingURL=api.service.js.map