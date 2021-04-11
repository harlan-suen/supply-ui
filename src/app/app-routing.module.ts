import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ItemComponent } from './admin/item/item.component';
import { OrderComponent } from './admin/order/order.component';
import { UserComponent } from './admin/user/user.component';
import { LoginComponent } from './login/login.component';
import { MyorderComponent } from './admin/myorder/myorder.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { FailedComponent } from './result/failed/failed.component';
import { NotfoundComponent } from './result/notfound/notfound.component';
import { SuccessComponent } from './result/success/success.component';
import { UnauthComponent } from './result/unauth/unauth.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/login'},
  {path: 'login', pathMatch: 'full', component: LoginComponent},
  {path: 'register', pathMatch: 'full', component: RegisterComponent},
  {path: 'failed', pathMatch: 'full', component: FailedComponent},
  {path: 'success', pathMatch: 'full', component: SuccessComponent},
  {path: 'unauth', pathMatch: 'full', component: UnauthComponent},
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'user', component: UserComponent},
      {path: 'item', component: ItemComponent},
      {path: 'order', component: OrderComponent},
      {path: 'profile', component: ProfileComponent},
      {path: 'myorder', component: MyorderComponent},
      {path: 'failed', pathMatch: 'full', component: FailedComponent},
      {path: 'success', pathMatch: 'full', component: SuccessComponent},
      {path: 'unauth', pathMatch: 'full', component: UnauthComponent},
      {path: '**', pathMatch: 'full', component: NotfoundComponent}
    ],
  },
  {path: '**', pathMatch: 'full', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
