import { Component } from '@angular/core';
import { vehicle } from '../../service/vehicle';
import { Route, Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {
cars:any;
constructor(private service:DataService,private route:Router){}
ngOnInit(){
this.service.getcars().subscribe((data)=>{
  this.cars=data;
  console.log(this.cars);
});
}
openvehicle(id:any){
  this.route.navigateByUrl('/user/view/'+id);
}
}
