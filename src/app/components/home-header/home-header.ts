import { Component } from '@angular/core';
import { HomeHeaderInfoBlock } from '../home-header-info-block/home-header-info-block';

@Component({
  selector: 'app-home-header',
  imports: [HomeHeaderInfoBlock],
  templateUrl: './home-header.html',
  styleUrl: './home-header.css'
})
export class HomeHeader {

}
