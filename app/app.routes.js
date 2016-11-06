"use strict";
var app_component_1 = require('./app.component');
var doc_list_component_1 = require('./home/doc-list.component');
exports.rootRouterConfig = [
    { path: '', redirectTo: 'home/', pathMatch: 'full' },
    { path: 'home', component: app_component_1.AppComponent,
        children: [
            { path: ':from', component: doc_list_component_1.DocListComponent }
        ]
    }
];
//# sourceMappingURL=app.routes.js.map