import { Component, Input } from '@angular/core';
import { Camp } from '../../modules/camp';
import { Location } from '../../modules/location';

@Component({
  selector: 'app-home-camp-card',
  imports: [],
  templateUrl: './home-camp-card.html',
  styleUrl: './home-camp-card.css'
})
export class HomeCampCard {
  @Input() camp!: Camp;
  

}
