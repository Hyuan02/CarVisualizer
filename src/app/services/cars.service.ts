import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarsData } from '../models/car';
import { isUndefined } from 'util';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  public cacheStorage: any;
  constructor(private httpClient: HttpClient) { 
  }

  public getCars(){
     return new Promise((resolve,reject)=>{
         this.OpenCache().then(response=>{
          if(!isUndefined(response)){
            response.json().then((res)=>{
              resolve(res);
            });
          }
          else{
            this.httpClient.get('assets/data/cars.json', {withCredentials: true}).subscribe(res=>{
              resolve(res);
            });
          }
         });
      })
  }

  public uploadCars(cars: CarsData){
    let carsResponse = new Response(JSON.stringify(cars));
    this.cacheStorage.put('/cars.json', carsResponse);
  }

  public uploadImage(imageFile: File){
    let imageResponse = new Response(imageFile);
    this.cacheStorage.put(`/${imageFile.name}`, imageResponse);
  }

  private async OpenCache(){
    this.cacheStorage = await window.caches.open('carStore');
    const response = await this.cacheStorage.match('/cars.json');
    return response;
  }

  public async GetFile(carImage: string){
    this.cacheStorage = await window.caches.open('carStore');
    const response = await this.cacheStorage.match(carImage);
    return response;
  }
}

