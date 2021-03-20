import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'car-slider',
  templateUrl: './car-slider.component.html',
  styleUrls: ['./car-slider.component.sass'],
})
export class CarSliderComponent implements OnInit {

  @Input() length: number;
  @Input() srcImg: string;
  @Input() carName: string;
  @Input() index: number;
  @Input() carFont: string;


  @Output() incrementIndex = new EventEmitter();
  @Output() decrementIndex = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  goNext(){
    this.incrementIndex.emit("next");
  }

  goPrevious(){
    this.decrementIndex.emit("previous");
  }

}
