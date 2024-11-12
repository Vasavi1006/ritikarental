import { Component } from '@angular/core';
import { ServiceorderService } from '../../serviceorder.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {
orders:any;
constructor(private Order:ServiceorderService){}
ngOnInit(){
  this.Order.getorders().subscribe((res)=>{
   this.Order=res;
   
  }
  )}
}
