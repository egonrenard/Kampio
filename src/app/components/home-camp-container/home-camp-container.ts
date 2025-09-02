import { Component } from '@angular/core';
import { HomeCampCard } from '../home-camp-card/home-camp-card';
import { CampService } from '../../services/camp.service';
import { Camp } from '../../modules/camp';

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
      this.camps = data;
    });
   console.log(this.camps);
  }

}
