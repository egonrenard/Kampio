import { Component, Input } from '@angular/core';
import { Camp } from '../../modules/camp';
import { Location } from '../../modules/location';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-home-camp-card',
  imports: [CurrencyPipe],
  templateUrl: './home-camp-card.html',
  styleUrl: './home-camp-card.css'
})
export class HomeCampCard {
  @Input() camp!: Camp;
  

   ngOnInit() {
    // log sports in console om te checken dat alles goed doorkomt
    console.log('Sports:', this.camp?.sports);
    console.log('Camp price:', this.camp.price);
    if (this.camp?.sports && this.camp.sports.length > 0) {
      console.log('Er zijn sporten:', this.camp.sports);
    } else {
      console.log('Geen sporten beschikbaar.');
    }
  }
}
