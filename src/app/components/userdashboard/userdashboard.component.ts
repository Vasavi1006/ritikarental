import { Component, ViewChild, viewChild } from '@angular/core';
import { Router } from '@angular/router';
import { WishlistComponent } from '../wishlist/wishlist.component';
import { ServicewishlistService } from '../../servicewishlist.service';

@Component({
  selector: 'app-userdashboard',
  templateUrl: './userdashboard.component.html',
  styleUrl: './userdashboard.component.css'
})
export class UserdashboardComponent {
constructor(private myrouter:Router,private wish:ServicewishlistService){}
@ViewChild('myTag')myTag:any;
isselected=false;
user:any;
username:any;
len:any
togglebar(){
  if(this.myTag.nativeElement.id){
    this.isselected=!this.isselected;

  }
}
ngDocheck(){
  this.len=this.wish.getlengthofwishlist();
}




}
