import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.service';
import {Car, CarsData} from '../models/car';
import { UnityService } from '../services/unity.service';

@Component({
  selector: 'selector-container',
  templateUrl: './selector-container.component.html',
  styleUrls: ['./selector-container.component.sass']
})
export class SelectorContainerComponent implements OnInit {


  public carsArray: Car[] = [];
  public actualIndex: number = 0;

  public isLoaded: boolean = false
  constructor(private carsService: CarsService, private unityService: UnityService) { 
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
      this.unityService.changeCar(this.actualIndex);
    }
  }

  goPrevious(){
    if(this.actualIndex > 0){
      this.actualIndex--
      this.unityService.changeCar(this.actualIndex);
    }
  }

  changeColor(colorValue: string){
    this.carsArray[this.actualIndex].color = colorValue;
  }
}
