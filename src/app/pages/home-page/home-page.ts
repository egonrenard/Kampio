import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HomeHeader } from '../../components/home-header/home-header';
import { HomeBody } from '../../components/home-body/home-body';

@Component({
  selector: 'app-home-page',
  imports: [HomeHeader, HomeBody],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  // viewchild is een beetje zoals queryselector, maar veel veiliger en component-gebonden
  // je hoeft geen globale dom te gebruiken. 
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  sections!: HTMLElement[];
  current = 0;
  isScrolling = false;

  // de code in ngafterviewinit wordt pas uitgevoerd nadat angular de component en
  // al zijn child element volledig heeft gerender in de dom
  ngAfterViewInit() {
    // als ik de pagina refreshed werkte mijn scroll niet meer.
    // dit is een probleem bij de timing van de dom render vs scroll-init
    // angular lifecycle hooks en eventueel een kleine setTimeout fixen het meestal
    // vandaar dat ik een settimeout gebruik voor het oproepen van this.sections
    // zodat we altijd de sections hebben en deze dus niet leeg kan

    setTimeout(() => {
      // in angular is @viewchild een wrapper om naar een dom element te refereren
      // het wrapper object heet ElementRef. Het echte dom-element zit in nativeElement
      // vandaar this.container.nativeElement 
      // " as HTMLElement[];" is typescript specifiek, je moet defineren wat voor element het is
      this.sections = Array.from(this.container.nativeElement.children) as HTMLElement[];
    });
  }

  // Met hostlistener zegt angular "luister naar het wheel event op dit component"
  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    // voorkom de standaar scroll of standaar event(wat dus nu scrollen is)
    event.preventDefault();

    // als we al scrollen , stoppen we de functie
    if (this.isScrolling) return;


    // deltaY geeft hoeveel in welke richting is gescrolled
    // als deltaY >0 en onze current sectie < de lengte van al onze secties (zodat we niet buiten de array vallen),
    // als dit true is dan dan verhoogen we current met 1. 
    // als het false kijken we of deltaY> 0 en dan kijken we of current >0 (want het mag niet negatief zijn, anders vallen we weer buiten de array),
    // als dit waar is , dan verlagen we current met 1.
    // als dit niet waar is dan stoppen we functie
    if (event.deltaY > 0 && this.current < this.sections.length - 1) this.current++;
    else if (event.deltaY < 0 && this.current > 0) this.current--;
    else return;

    // daarna zetten we isScrolling op true, zodat de scroll functie niet meerdere keren wordt uitgevoerd
    // en dan zetten we de scroll behavior op smooth
    // ookal hebben we in onze css
    this.isScrolling = true;
    this.sections[this.current].scrollIntoView({ behavior: 'smooth' });

    setTimeout(() => this.isScrolling = false, 500); 
  }
}
