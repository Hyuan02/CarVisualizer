import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import {UnityService} from './../services/unity.service';

@Component({
  selector: 'footer-buttons',
  templateUrl: './footer-buttons.component.html',
  styleUrls: ['./footer-buttons.component.sass']
})
export class FooterButtonsComponent implements OnInit {


  @Output() colorEmitter = new EventEmitter<string>();
  @Input() currentColor: string;
  public colors = ["#00FF00", "#FF0000", "#0000FF", "#000000", "#FFFFFF", "#FFFF00", "#00FFFF"];
  constructor(private unityService: UnityService) { }

  ngOnInit() {
  }

  changeColor(color: string){
    this.colorEmitter.next(color);
    this.unityService.changeColor(color);    
  }

  takeScreenshot(){
    this.unityService.takeScreenshot();
  }

}
