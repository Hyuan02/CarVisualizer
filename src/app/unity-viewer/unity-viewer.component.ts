import { Component, OnInit } from '@angular/core';
import {UnityService} from '../services/unity.service';

@Component({
  selector: 'unity-viewer',
  templateUrl: './unity-viewer.component.html',
  styleUrls: ['./unity-viewer.component.sass']
})
export class UnityViewerComponent implements OnInit {

  constructor(private unityService: UnityService) { }

  ngOnInit() {
    this.unityService.loadUnity();
  }

}
