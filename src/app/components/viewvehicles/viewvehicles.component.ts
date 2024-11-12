import { Component, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../service/data.service';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { ServiceorderService } from '../../serviceorder.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-viewvehicles',
  templateUrl: './viewvehicles.component.html',
  styleUrl: './viewvehicles.component.css',
  // standalone:true,
  // imports:[FormsModule,CommonModule]
})
export class ViewvehiclesComponent{
vid:any;vehicle:any;ordervehicle:any;uname:any;uaddress:any;utime:any;neworder:any;
constructor(private route:ActivatedRoute,private service:DataService,private wish:WishlistComponent,private Order:ServiceorderService){}
ngOnInit(){
  this.vid=this.route.snapshot.params['id'];
console.log(this.vid);
if(this.vid!=null){
  this.vehicle=this.service.getVehicleById(this.vid);
console.log(this.vehicle);
}

}
addtowishlist(vehicle:any){
  this.wish.addtowishlist(vehicle);
  }


ordernow(){
 this.neworder={
 vehicleId:this.ordervehicle.vehicleId,
  vehicleName:this.ordervehicle.vehicleName,
  vehicleprice:this.ordervehicle.vehicleprice,
username:this.uname,
address:this.uaddress,
time:this.utime
 } 
console.log(this.neworder);
this.neworder.addtoorders(this.neworder);
alert("order placed successfully");
}
openModal(vehicle:any){
  this.ordervehicle=vehicle;
}

}


