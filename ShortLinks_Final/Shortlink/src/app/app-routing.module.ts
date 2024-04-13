import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LinkRouterComponent } from './link-router/link-router.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'ShortURL/:ShortURL',
    component: LinkRouterComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
