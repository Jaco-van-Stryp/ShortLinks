import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinkRouterComponent } from './link-router/link-router.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LinkPageComponent } from './link-page/link-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: 's/:ShortURL',
    component: LinkRouterComponent,
  },
  {
    path: 'Home',
    component: HomeComponent,
  },
  {
    path: 'NotFound',
    component: NotFoundComponent,
  },
  {
    path: 'MyLinks',
    component: LinkPageComponent,
  },
  {
    path: 'Login',
    component: LoginComponent,
  },
  {
    path: 'Register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
