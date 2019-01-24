import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  { path: '', component: BodyComponent },
  { path: 'login', component: LoginComponent },
  /*{ path: '**', component: NotfoundComponent },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
