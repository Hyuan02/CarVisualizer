import { Injectable } from '@angular/core';
import { UnityLoader } from "./UnityLoader.js";
import { UnityProgress} from './UnityProgress.js';
@Injectable({
  providedIn: 'root'
})
export class UnityService {
  public unityInstance: any;
  public loaded = false;
  
  
  
  constructor() { }

  loadUnity(){
    window["UnityLoader"] = UnityLoader;
    window["UnityProgress"] = UnityProgress;
    window["receiveImageFromBrowser"] = (data)=>{
      this.receiveImageFromBrowser(data) 
    }
    this.unityInstance = UnityLoader.instantiate("gameContainer", "assets/Build/Build.json", {onProgress: UnityProgress});
  }

  changeCar(index: number){
    this.unityInstance.SendMessage('ServiceController', 'ChangeCarIndex', index);
  }

  changeColor(color:string){
    this.unityInstance.SendMessage('ServiceController', 'ChangeWindowColor', color);
  }

  takeScreenshot(){
    this.unityInstance.SendMessage('ServiceController', 'CaptureScreenshot');
  }

  receiveImageFromBrowser(data){
    var file = new File([data], "screenshot.png");
    let link = document.createElement("a");
    link.download = "Screenshot.png";
    link.href = URL.createObjectURL(file);
    link.click();
  }
}
