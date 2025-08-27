import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-body-card',
  imports: [],
  templateUrl: './home-body-card.html',
  styleUrl: './home-body-card.css'
})
export class HomeBodyCard {

  @Input() title: string = 'Geen titel meegegeven';
  @Input() description: string = 'Geen tekst meegegeven';
  @Input() imageSrc!: string;
  @Input() imageAlt: string = 'Geen alt-tekst beschikbaar';

}
