import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactModule } from './contacts/contacts.module';

import { ContactsDetailComponent } from './contacts-detail/contacts-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routesConfig: Routes = [
  { path: 'detail/:id/:name/:phoneNumber', component: ContactsDetailComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    ContactModule,
    RouterModule.forRoot(routesConfig),
    CommonModule
  ],
  declarations: [
    ContactsDetailComponent,
    PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule{}

