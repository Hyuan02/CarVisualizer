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
    this.unityInstance = UnityLoader.instantiate("gameContainer", "assets/Build/Build.json", {onProgress: UnityProgress});
  }

  isOnProgress(){
    this.loaded = true;
  }
}
