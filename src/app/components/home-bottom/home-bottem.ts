import { Component } from '@angular/core';
import { HomeBottomFooter } from '../home-bottom-footer/home-bottom-footer';
import { HomeCampContainer } from '../home-camp-container/home-camp-container';

@Component({
  selector: 'app-home-bottom',
  imports: [HomeBottomFooter, HomeCampContainer],
  templateUrl: './home-bottem.html',
  styleUrl: './home-bottem.css'
})
export class HomeBottom {

}
