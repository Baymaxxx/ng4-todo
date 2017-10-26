import { ForgetPwdComponent } from './forget-pwd/forget-pwd.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './user-login/user-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'userinfo' },
  { path: 'userinfo', component: UserInfoComponent },
  { path: 'login', component: UserLoginComponent},
  { path: 'register', component: UserRegisterComponent},
  { path: 'forgetpwd', component: ForgetPwdComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
