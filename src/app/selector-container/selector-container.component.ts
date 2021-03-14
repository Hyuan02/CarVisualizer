import { Component, OnInit } from '@angular/core';
import {CarsService} from '../services/cars.service';
import {Car, CarsData} from '../models/car';
import { UnityService } from '../services/unity.service';
import { Observable, Subject, Subscription } from 'rxjs';
import { resolve } from 'url';

@Component({
  selector: 'selector-container',
  templateUrl: './selector-container.component.html',
  styleUrls: ['./selector-container.component.sass']
})
export class SelectorContainerComponent implements OnInit {


  public carsArray: Car[] = [];
  public actualIndex: number = 0;
  public isLoaded: boolean = false
  public loadedObservable: Subscription;
  public loadIndex: number = 0;
  
  constructor(private carsService: CarsService, private unityService: UnityService) {
      this.carsService.getCars().then((response: CarsData)=>{
          this.carsArray = response.cars;
      }).then(()=>{
        this.loadedObservable = this.unityService.loaded.subscribe((res)=>{
          this.initRoutine({cars: this.carsArray} as CarsData);
        });
      });
  }

  ngOnInit() {
  }

  goNext(){
    if(this.actualIndex < this.carsArray.length-1){
      this.actualIndex++
      this.unityService.changeCar(1);
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

  saveCars(value: string){
    this.carsService.uploadCars({cars: this.carsArray});
  }

  public saveImage(image: File){
    this.carsArray[this.actualIndex].image = "\\" + image.name;
    this.carsService.uploadImage(image);
  }

  initRoutine(response?: CarsData){
    this.loadIndex++;
    if(this.loadIndex == 1){
      this.unityService.initRoutine(JSON.stringify(response));
    }
    else if(this.loadIndex == 2){
      this.isLoaded = true;
      this.loadedObservable.unsubscribe();
    }
  }
}
