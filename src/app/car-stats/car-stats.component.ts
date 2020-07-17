import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'car-stats',
  templateUrl: './car-stats.component.html',
  styleUrls: ['./car-stats.component.sass']
})
export class CarStatsComponent implements OnInit {


  @Input() topSpeed: number
  @Input() acceleration: number
  @Input() handling: number
  
  constructor() { }

  ngOnInit() {
  }

}
