import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzBadgeModule } from 'ng-zorro-antd/badge';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzResultModule } from 'ng-zorro-antd/result';
// Component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ItemComponent } from './admin/item/item.component';
import { UserComponent } from './admin/user/user.component';
import { OrderComponent } from './admin/order/order.component';
import { SuccessComponent } from './result/success/success.component';
import { UnauthComponent } from './result/unauth/unauth.component';
import { NotfoundComponent } from './result/notfound/notfound.component';
import { FailedComponent } from './result/failed/failed.component';
import { ProfileComponent } from './admin/profile/profile.component';
import { MyorderComponent } from './admin/myorder/myorder.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    ItemComponent,
    UserComponent,
    OrderComponent,
    SuccessComponent,
    UnauthComponent,
    NotfoundComponent,
    FailedComponent,
    ProfileComponent,
    MyorderComponent
  ],
  imports: [
    // Ng Module
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    // Ng-Zorro Module
    NzButtonModule,
    NzMessageModule,
    NzDropDownModule,
    NzGridModule,
    NzCheckboxModule,
    NzToolTipModule,
    NzPopoverModule,
    NzSelectModule,
    NzIconModule,
    NzBadgeModule,
    NzAlertModule,
    NzModalModule,
    NzTableModule,
    NzDrawerModule,
    NzTabsModule,
    NzInputModule,
    NzIconModule,
    NzDatePickerModule,
    NzTimePickerModule,
    NzTagModule,
    NzInputNumberModule,
    NzBreadCrumbModule,
    NzListModule,
    NzSwitchModule,
    NzRadioModule,
    NzFormModule,
    NzAvatarModule,
    NzSpinModule,
    NzCardModule,
    NzDividerModule,
    NzProgressModule,
    NzPopconfirmModule,
    NzUploadModule,
    NzLayoutModule,
    NzResultModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
