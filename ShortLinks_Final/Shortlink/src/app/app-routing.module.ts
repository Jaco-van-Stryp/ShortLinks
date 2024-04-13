import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkRouterComponent } from './link-router/link-router.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'NotFound',
    component: NotFoundComponent,
  },
  {
    path: 's/:ShortURL',
    component: LinkRouterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
