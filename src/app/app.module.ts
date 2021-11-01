import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AuthService} from './auth.service';
import {IndexComponent} from './index/index.component';
import {FirelistComponent} from './firelist/firelist.component';
import {AngularFireDatabaseModule} from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports:      [ 
    BrowserModule, 
    FormsModule,
    RouterModule.forRoot([
      {path: '' , component: IndexComponent},
      {path: 'firelist', component: FirelistComponent},

    ]),

    AngularFireModule.initializeApp(
      {
         apiKey: "AIzaSyAQmTuHB85hLwYEuTbu4hvWHaxxKXpy2kQ",
         authDomain: "rosangelassborges.firebaseapp.com",
         projectId: "rosangelassborges",
         storageBucket: "rosangelassborges.appspot.com",
         messagingSenderId: "402701460484",
         appId: "1:402701460484:web:73311339abef1e51434151"
     }
    ),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent,IndexComponent, FirelistComponent],
  bootstrap:    [ AppComponent ],
  providers: [AuthService],
})
export class AppModule { }