import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.css'
})
export class WishlistComponent {
vehicles:any;
constructor(private wish:WishlistComponent){}
ngOnInit(){}
addtowishlist(vehicle:any){
  this.wish.addtowishlist(vehicle);
}
}





