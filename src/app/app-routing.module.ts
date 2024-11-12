import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { UserdashboardComponent } from './components/userdashboard/userdashboard.component';
import { ViewordersComponent } from './components/vieworders/vieworders.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { ViewvehiclesComponent } from './components/viewvehicles/viewvehicles.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { AddvehiclesComponent } from './components/addvehicles/addvehicles.component';
import { ManagevehiclesComponent } from './components/managevehicles/managevehicles.component';
import { CarsComponent } from './components/cars/cars.component';
import { BikesComponent } from './components/bikes/bikes.component';

const routes: Routes = [
{path:'',component:LoginComponent},
{path:'user',component:UserdashboardComponent,
children:[
{path:'cars',component:CarsComponent},
{path:'bikes',component:BikesComponent},
{path:'view/:id',component:ViewvehiclesComponent}, 
{path:'orders',component:ViewordersComponent},
{path:'wishlist',component:WishlistComponent},
{path:'booking',component:UserdashboardComponent}     
]
},

{path:'admin',component:AdmindashboardComponent,
  children:[
{path:'add',component:AddvehiclesComponent},
{path:'manage',component:ManagevehiclesComponent}, 
{path:'cars',component:CarsComponent},
{path:'Bikes',component:BikesComponent},
{path:'view',component:ViewordersComponent}
  ]
},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
