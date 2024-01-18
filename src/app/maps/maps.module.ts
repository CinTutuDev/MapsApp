import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
(mapboxgl as any).accessToken =
  'pk.eyJ1IjoiY2ludGF0YyIsImEiOiJjbGZjOXVzMnAwbXhmM3huMTc3cnd2cG5rIn0.wCsVZJ0fTk5JtliChD0V5Q';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';

import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';

import { MarkersPageComponent } from './pages/markers-page/markers-page.component';

import { ZoomRagePageComponent } from './pages/zoom-rage-page/zoom-rage-page.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRagePageComponent,
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent,
  ],
})
export class MapsModule {}
