import { AfterViewInit, Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
(mapboxgl as any).accessToken =
  'pk.eyJ1IjoiY2ludGF0YyIsImEiOiJjbGZjOXVzMnAwbXhmM3huMTc3cnd2cG5rIn0.wCsVZJ0fTk5JtliChD0V5Q';
@Component({
  templateUrl: './maps-layoutfull-screen-page.component.html',
  styleUrls: ['./maps-layoutfull-screen-page.component.scss'],
})
export class MapsLayoutfullScreenPageComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: 9, // starting zoom
    });
  }



}
