import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  public getCars(){
    return this.httpClient.get('assets/data/cars.json', {withCredentials: true});
      
  }
}

