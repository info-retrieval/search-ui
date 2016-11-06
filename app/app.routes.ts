import {Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DocListComponent} from './home/doc-list.component'

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home/', pathMatch: 'full'},
  {path: 'home', component: AppComponent,
  	 children: [
      {path: ':from', component: DocListComponent}
     ]
  }
];