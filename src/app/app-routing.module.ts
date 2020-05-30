import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { MyWorksComponent } from './components/my-works/my-works.component';
import { ConstructComponent } from './components/my-works/construct/construct.component';
import { MaktabtiComponent } from './components/my-works/maktabti/maktabti.component';
import { QuotesComponent } from './components/my-works/quotes/quotes.component';
import { FitnezComponent } from './components/my-works/fitnez/fitnez.component';
import { AppHeroComponent } from './components/my-works/app-hero/app-hero.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'myWorks',
    component: MyWorksComponent,
    data: { animation: 'FilterPage' },
  },
  {
    path: 'myWorks/Construct',
    component: ConstructComponent,
  },
  {
    path: 'myWorks/Maktabti',
    component: MaktabtiComponent,
  },
  {
    path: 'myWorks/Quotes',
    component: QuotesComponent,
  },
  {
    path: 'myWorks/fitnez',
    component: FitnezComponent,
  },
  {
    path: 'myWorks/appHero',
    component: AppHeroComponent,
  },

  {
    path: 'about',
    component: AboutComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: '',
    component: HomeComponent,
    data: { animation: 'HomePage' },
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
