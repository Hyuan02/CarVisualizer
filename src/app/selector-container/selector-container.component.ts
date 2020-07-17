import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.service';
import {Car, CarsData} from '../models/car';

@Component({
  selector: 'selector-container',
  templateUrl: './selector-container.component.html',
  styleUrls: ['./selector-container.component.sass']
})
export class SelectorContainerComponent implements OnInit {


  public carsArray: Car[] = [];
  public actualIndex: number = 0;

  public isLoaded: boolean = false
  constructor(private carsService: CarsService) { 
    this.carsService.getCars().subscribe((data: CarsData)=>{
      this.carsArray = data.cars;
      this.isLoaded = true;
    });
  }

  ngOnInit() {
     
  }

  goNext(){
    if(this.actualIndex < this.carsArray.length-1){
      this.actualIndex++
    }
  }

  goPrevious(){
    if(this.actualIndex > 0){
      this.actualIndex--
    }
  }
}
