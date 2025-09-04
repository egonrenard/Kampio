import { Component } from '@angular/core';
import { HomeCampCard } from '../home-camp-card/home-camp-card';
import { CampService } from '../../services/camp.service';
import { Camp } from '../../modules/camp';
import { Location } from '../../modules/location';

@Component({
  selector: 'app-home-camp-container',
  standalone: true,
  imports: [HomeCampCard],
  templateUrl: './home-camp-container.html',
  styleUrls: ['./home-camp-container.css']
})
export class HomeCampContainer {
  camps: Camp[] = [];

  constructor(private campService: CampService) {}

  ngOnInit(): void {
    this.campService.getCamps().subscribe(data => {
      this.camps = data.map((camp: any) => new Camp(
        camp.id,
        camp.name,
        camp.sport,
        camp.organisation,
        new Location(
          camp.location.street,
          camp.location.houseNumber,
          camp.location.city,
          camp.location.postalCode,
          camp.location.province
        ),
        camp.startDate,
        camp.endDate,
        camp.startHour,
        camp.endHour,
        camp.capacity,
        camp.price,
        camp.ageMin,
        camp.ageMax,
        camp.rating ?? null
      ))
    });
  }
}
