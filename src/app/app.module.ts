import {
  AngularFireAuth,
  AngularFireAuthModule,
} from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Interceptor } from './services/interceptor/interceptor.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { getDatabase, provideDatabase } from '@angular/fire/database';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage()),
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideDatabase(() => getDatabase()),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor, // Adicione o novo interceptor aqui
      multi: true,
    },

    AngularFireAuth,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
