import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrl: './bikes.component.css'
})
export class BikesComponent {
  bikes:any;
  constructor(private service:DataService,private route:Router){}
  ngOnInit(){
  this.service.getbikes().subscribe((data)=>{
    this.bikes=data;
    console.log(data);
  });
  }
  openvehicle(id:any){
    this.route.navigateByUrl('/user/view/'+id);
  }
  }

