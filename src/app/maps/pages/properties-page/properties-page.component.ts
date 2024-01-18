import { Component } from '@angular/core';
import { CounterAloneComponent } from 'src/app/alone/components/counter-alone/counter-alone.component';

interface House {
  title: string;
  description: string;
  lngLat: [number,number];
}
@Component({

  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss'],
})
export class PropertiesPageComponent {
  public houses: House[] = [
    {
      title: 'My City Natal, Badajoz',
      description: 'Bella ciudad y mejor gente, "Badahó"',
      lngLat: [-6.968170871704501, 38.88292374852389],
    },
    {
      title: 'Casa de playa, México',
      description: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [-99.91287720907991, 16.828940930185748],
    },
    {
      title: 'Apartamento, Argentina',
      description:
        'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [-58.430166677283445, -34.57150108832866],
    },
    {
      title: 'Local comercial, España',
      description:
        'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [-3.7112735618380177, 40.42567285425766],
    },
    {
      title: 'Casa residencial, Canadá',
      description: 'Bella propiedad en Katana, Canadá',
      lngLat: [-75.92722289474008, 45.280015511264466],
    },
    {
      title: 'Casa de playa, México',
      description: 'Hermosa casa de playa en Acapulco, México',
      lngLat: [-99.91287720907991, 16.828940930185748],
    },
    {
      title: 'Apartamento, Argentina',
      description:
        'Lujoso apartamento en el corazón de Buenos Aires, Argentina',
      lngLat: [-58.430166677283445, -34.57150108832866],
    },
    {
      title: 'Local comercial, España',
      description:
        'Local comercial disponible en Madrid, España, cerca de El Jardín Secreto.',
      lngLat: [-3.7112735618380177, 40.42567285425766],
    },
  ];

  getMapboxUrl(lngLat: number[]): string {
    const [lng, lat] = lngLat;
    const zoom = 15;
    return `https://www.mapbox.com/maps/${lng}/${lat}?zoom=${zoom}`;
  }
}

