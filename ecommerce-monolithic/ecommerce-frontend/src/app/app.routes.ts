import { Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { OrdersComponent } from './ecommerce/orders/orders.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'shop', component: EcommerceComponent},
    {path: 'orders', component: OrdersComponent}
];
