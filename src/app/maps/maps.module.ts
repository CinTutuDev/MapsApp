import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { MapsLayoutfullScreenPageComponent } from './pages/maps-layoutfull-screen-page/maps-layoutfull-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ZoomRagePageComponent } from './pages/zoom-rage-page/zoom-rage-page.component';

@NgModule({
  declarations: [
    MiniMapComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    MapsLayoutfullScreenPageComponent,
    MarkersPageComponent,
    PropertiesPageComponent,
    ZoomRagePageComponent,
  ],
  imports: [CommonModule, MapsRoutingModule],
})
export class MapsModule {}