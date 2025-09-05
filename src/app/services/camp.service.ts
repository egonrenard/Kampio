import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { Camp } from '../modules/camp';
import { LocationService } from './location.service';
import { Location } from '../modules/location';

@Injectable({ providedIn: 'root' })
export class CampService {
  private url = 'assets/test-data/camps.json';

  constructor(private http: HttpClient, private locationService: LocationService) {}

  getCamps(): Observable<Camp[]> {
    return forkJoin({
      camps: this.http.get<any[]>(this.url),
      locations: this.locationService.getLocations() // gebruik je LocationService
    }).pipe(
      map(({ camps, locations }) => {
        return camps.map(c => {
          // zoek de juiste location via LocationService data
          const location = locations.find(l => l.id === c.locationId);
          if (!location) throw new Error(`Location met ID ${c.locationId} niet gevonden`);
          
          return new Camp(
            c.id,
            c.name,
            [c.sport],
            c.organisation,
            c.locationId,
            c.startDate,
            c.endDate,
            c.startHour,
            c.endHour,
            c.capacity,
            c.price,
            c.ageMin,
            c.ageMax,
            new Location(          
              location.id,
              location.street,
              location.houseNumber,
              location.city,
              location.postalCode,
              location.province
            ),
            c.rating,
            c.numberOfInscriptions
          );
        });
      })
    );
  }
}
