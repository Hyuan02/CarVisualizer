import { Injectable } from '@angular/core';
import { UnityLoader } from "./UnityLoader.js";
import { UnityProgress} from './UnityProgress.js';
import { CarsService } from './cars.service.js';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UnityService {
  public unityInstance: any;
  public loaded = new Subject<boolean>();
  
  
  
  constructor(private carsService: CarsService) { }

  loadUnity(){
    window["UnityLoader"] = UnityLoader;
    window["UnityProgress"] = UnityProgress;
    window["receiveImageFromBrowser"] = (data)=>{
      this.receiveImageFromBrowser(data); 
    }
    window["fetchImage"]= (data)=>{
      this.fetchImage(data);
    }

    window["sendLoadFlag"] = ()=>{
      this.loadFlag();
    }

    this.unityInstance = UnityLoader.instantiate("gameContainer", "assets/Build/Build.json", {onProgress: UnityProgress});
  }

  changeCar(index: number){
    this.unityInstance.SendMessage('ServiceController', 'ChangeCarIndex', index);
  }

  changeColor(color:string){
    this.unityInstance.SendMessage('ServiceController', 'ChangeColor', color);
  }

  takeScreenshot(){
    this.unityInstance.SendMessage('ServiceController', 'CaptureScreenshot');
  }

  sendImage(imageClass: string){
    this.unityInstance.SendMessage('ServiceController', 'AddImageAsDecal', imageClass);
  }

  receiveImageFromBrowser(data){
    var file = new File([data], "screenshot.png");
    let link = document.createElement("a");
    link.download = "Screenshot.png";
    link.href = URL.createObjectURL(file);
    link.click();
  }

  initRoutine(carsModel: string){
    this.unityInstance.SendMessage('ServiceController', 'InitRoutine', carsModel);
  }

  fetchImage(imageUrl: string){
    this.carsService.GetFile(imageUrl).then((response)=>{
      response.blob().then((file)=>{
        this.setUrlFromImage(URL.createObjectURL(file));
      });
    });
  }

  loadFlag(){
    console.log("called load flag")
    this.loaded.next(true);
  }

  private setUrlFromImage(url: string){
    this.unityInstance.SendMessage('ServiceController', 'SetUrlImage', url);
  }

  secondLoadFlag(){
    this.loaded.next(true);
  }
}
