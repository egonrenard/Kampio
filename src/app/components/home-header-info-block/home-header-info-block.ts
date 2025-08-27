import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-header-info-block',
  imports: [],
  templateUrl: './home-header-info-block.html',
  styleUrl: './home-header-info-block.css'
})
export class HomeHeaderInfoBlock {
  @Input() title: string = 'Geen titel meegegeven';
  @Input() description: string = 'Geen tekst meegegeven';
  @Input() imageSrc!: string;
  @Input() imageAlt: string = 'Geen alt-tekst beschikbaar';

}
