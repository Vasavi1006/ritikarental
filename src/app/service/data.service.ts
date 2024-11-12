import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
vehicles:vehicle[]=[
  // Cars
  {
    vehicleId: 1,
    vehicleName: "Swift",
    vehicleCompany: "Maruti Suzuki",
    vehiclePrice: 600000,
    availableTime: "9:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "https://carwow-uk-wp-3.imgix.net/18015-MC20BluInfinito-scaled-e1707920217641.jpg",
    rating: 4.5
  },
  {
    vehicleId: 2,
    vehicleName: "City",
    vehicleCompany: "Honda",
    vehiclePrice: 1000000,
    availableTime: "8:00 AM - 5:00 PM",
    fuelType: "Diesel",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "https://media.architecturaldigest.com/photos/63079fc7b4858efb76814bd2/16:9/w_4000,h_2250,c_limit/9.%20DeLorean-Alpha-5%20%5BDeLorean%5D.jpg",
    rating: 4.7
  },
  {
    vehicleId: 3,
    vehicleName: "Creta",
    vehicleCompany: "Hyundai",
    vehiclePrice: 1200000,
    availableTime: "7:00 AM - 7:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 7,
    vehicleType: "Car",
    vehicleImage: "https://optim.tildacdn.net/tild6666-3964-4837-b736-333931393161/-/resize/824x/-/format/webp/AI_10_year_car_exter.png",
    rating: 4.6
  },
  {
    vehicleId: 4,
    vehicleName: "Fortuner",
    vehicleCompany: "Toyota",
    vehiclePrice: 3000000,
    availableTime: "9:00 AM - 8:00 PM",
    fuelType: "Diesel",
    seatingCapacity: 7,
    vehicleType: "Car",
    vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCjdb91Ev2ejVA_IYJHac0zvytyDhWkKw3Zg&s",
    rating: 4.8
  },
  {
    vehicleId: 5,
    vehicleName: "Kwid",
    vehicleCompany: "Renault",
    vehiclePrice: 500000,
    availableTime: "8:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-110.jpeg?isig=0&q=80",
    rating: 4.3
  },
  {
    vehicleId: 6,
    vehicleName: "Thar",
    vehicleCompany: "Mahindra",
    vehiclePrice: 1500000,
    availableTime: "10:00 AM - 5:00 PM",
    fuelType: "Diesel",
    seatingCapacity: 5,
    vehicleType: "Car",
    vehicleImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8_OP9TZ0iDuVeo4LKhdSaeR8k1GBkGCzu0g&s",
    rating: 4.9
  },

  // Bikes
  {
    vehicleId: 7,
    vehicleName: "Splendor Plus",
    vehicleCompany: "Hero",
    vehiclePrice: 70000,
    availableTime: "7:00 AM - 9:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://imgd.aeplcdn.com/1056x594/n/cw/ec/15109/splendor-plus-right-side-view-2.png?isig=0&q=80",
    rating: 4.2
  },
  {
    vehicleId: 8,
    vehicleName: "Pulsar 150",
    vehicleCompany: "Bajaj",
    vehiclePrice: 90000,
    availableTime: "6:00 AM - 10:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://5.imimg.com/data5/SELLER/Default/2021/6/VL/UE/QH/45461290/bajaj-pulsar-125-500x500.png",
    rating: 4.5
  },
  {
    vehicleId: 9,
    vehicleName: "FZ S V3",
    vehicleCompany: "Yamaha",
    vehiclePrice: 110000,
    availableTime: "8:00 AM - 8:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://imgd.aeplcdn.com/370x208/n/cw/ec/188041/yamaha-fz-s-right-front-three-quarter2.jpeg?isig=0&q=80",
    rating: 4.6
  },
  {
    vehicleId: 10,
    vehicleName: "Duke 250",
    vehicleCompany: "KTM",
    vehiclePrice: 200000,
    availableTime: "9:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://bd.gaadicdn.com/processedimages/ktm/duke-250/494X300/duke-2505fd47b2feb975.jpg?imwidth=880",
    rating: 4.7
  },
  {
    vehicleId: 11,
    vehicleName: "Bullet 350",
    vehicleCompany: "Royal Enfield",
    vehiclePrice: 160000,
    availableTime: "10:00 AM - 7:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://imgd.aeplcdn.com/664x374/n/cw/ec/1/versions/royalenfield-classic-350-heritage1725274941405.jpg?q=80",
    rating: 4.8
  },
  {
    vehicleId: 12,
    vehicleName: "Apache RTR 160",
    vehicleCompany: "TVS",
    vehiclePrice: 95000,
    availableTime: "8:00 AM - 6:00 PM",
    fuelType: "Petrol",
    seatingCapacity: 2,
    vehicleType: "Bike",
    vehicleImage: "https://imgd.aeplcdn.com/211x211/n/cw/ec/97549/apache-rtr-160-4v-right-front-three-quarter-4.jpeg?isig=0&q=80",
    rating: 4.4
  }
];

getVehicleById(id:any){
  return this.vehicles.find(vehicle=>vehicle.vehicleId==id);
}
addvehicle(newvehicle:any){
  this.vehicles.push(new vehicle);
  return"added"
}
getAllvehicles(){
  return of(this.vehicles);
}
deletevehicles(id:any){
let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
this.vehicles.splice(index,1);
return"deleted";
}
updatevehicle(id:any,newvechile:any){
  let index=this.vehicles.findIndex(vehicle=>vehicle.vehicleId==id);
  this.vehicles.splice(index,1,newvechile);
  return"updated"; 
}
getcars(){
  return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="cars"))};
  getbikes(){
    return of(this.vehicles.filter(vehicle=>vehicle.vehicleType=="bike"));
  }

constructor() { }
}
