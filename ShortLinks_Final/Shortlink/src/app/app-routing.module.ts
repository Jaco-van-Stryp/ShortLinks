import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkRouterComponent } from './link-router/link-router.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkPageComponent } from './link-page/link-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 's/:ShortURL',
    component: LinkRouterComponent,
  },
  {
    path: 'NotFound',
    component: NotFoundComponent,
  },
  {
    path: 'MyLinks',
    component: LinkPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
