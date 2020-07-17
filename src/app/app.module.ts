import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectorContainerComponent } from './selector-container/selector-container.component';
import { CarSliderComponent } from './car-slider/car-slider.component';
import { CarStatsComponent } from './car-stats/car-stats.component';
import { FooterButtonsComponent } from './footer-buttons/footer-buttons.component';
import { UnityViewerComponent } from './unity-viewer/unity-viewer.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    SelectorContainerComponent,
    CarSliderComponent,
    CarStatsComponent,
    FooterButtonsComponent,
    UnityViewerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
