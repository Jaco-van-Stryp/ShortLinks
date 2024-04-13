import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkRouterComponent } from './link-router/link-router.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
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
