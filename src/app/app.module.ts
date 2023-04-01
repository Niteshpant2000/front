import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminCardsComponent } from './components/admin-cards/admin-cards.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { EmployeeDashboardComponent } from './components/employee-dashboard/employee-dashboard.component';
import { EmployeeCardsComponent } from './components/employee-cards/employee-cards.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// material-icons
import { MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { LoginComponent } from './components/auth/login/login.component';
import { BillingComponent } from './components/billing/billing.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { EmployeeInventoryComponent } from './components/employee-inventory/employee-inventory.component';
import { AddCustomerFormComponent } from './components/add-customer-form/add-customer-form.component';
import { CustomerNavbarComponent } from './components/customer-navbar/customer-navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashboardComponent,
    AdminCardsComponent,
    InventoryComponent,
    AdminLayoutComponent,
    EmployeeDashboardComponent,
    EmployeeCardsComponent,
    AddProductComponent,
    LoginComponent,
    BillingComponent,
    AddEmployeeComponent,
    AddCustomerComponent,
    FooterComponent,
    CustomerDashboardComponent,
    EmployeeComponent,
    EmployeeInventoryComponent,
    AddCustomerFormComponent,
    CustomerNavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,

    // material icons
    MatSlideToggleModule,
    MatDialogModule,
    MatCardModule,
    MatInputModule, 
    MatButtonModule, 
    MatCardModule, 
    MatFormFieldModule,
    MatDialogModule,
    MatGridListModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddProductComponent]
})
export class AppModule { }
