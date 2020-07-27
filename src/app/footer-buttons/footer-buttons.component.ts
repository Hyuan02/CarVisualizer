import { Component, OnInit, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import {UnityService} from './../services/unity.service';
import { CarsService } from '../services/cars.service';

@Component({
  selector: 'footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.sass']
})
export class FooterButtonsComponent implements OnInit {


  @Output() colorEmitter = new EventEmitter<string>();
  @Output() imageEmitter = new EventEmitter<File>();
  @Output() carSave = new EventEmitter<string>();
  @Input() currentColor: string;
  public colors = ["#00FF00", "#FF0000", "#0000FF", "#000000", "#FFFFFF", "#FFFF00", "#00FFFF"];

  @ViewChild("fileInput", {static: false}) fileInput;
  constructor(private unityService: UnityService, private carsService: CarsService) { }

  ngOnInit() {
  }

  changeColor(color: string){
    this.colorEmitter.next(color);
    this.unityService.changeColor(color);    
  }

  takeScreenshot(){
    this.unityService.takeScreenshot();
  }

  triggerFileInput(){
    this.fileInput.nativeElement.files = null;
    this.fileInput.nativeElement.click();
  }

  uploadFile(event: any){
    if(event.target.files.length > 0){
      let object = {
        imageUrl: URL.createObjectURL(event.target.files[0]),
        imageFormat: event.target.files[0].type
      }
      this.imageEmitter.emit(event.target.files[0]);
      this.unityService.sendImage(JSON.stringify(object));
    }
  }

  saveCars(){
    this.carSave.emit("");
  }

}
