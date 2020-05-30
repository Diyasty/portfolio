import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxTypedJsModule } from 'ngx-typed-js';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AboutComponent } from './components/about/about.component';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { AppHeroComponent } from './components/my-works/app-hero/app-hero.component';
import { FitnezComponent } from './components/my-works/fitnez/fitnez.component';
import { QuotesComponent } from './components/my-works/quotes/quotes.component';
import { MaktabtiComponent } from './components/my-works/maktabti/maktabti.component';
import { ConstructComponent } from './components/my-works/construct/construct.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
@NgModule({
  declarations: [AppComponent, HomeComponent, NavbarComponent, AboutComponent, MyWorksComponent, AppHeroComponent, FitnezComponent, QuotesComponent, MaktabtiComponent, ConstructComponent, ContactComponent, NotFoundComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxTypedJsModule,
    AnimateOnScrollModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
