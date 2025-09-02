import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { HomeHeader } from '../../components/home-header/home-header';
import { HomeBody } from '../../components/home-body/home-body';
import { HomeBottom } from '../../components/home-bottom/home-bottem';

@Component({
  selector: 'app-home-page',
  imports: [HomeHeader, HomeBody, HomeBottom],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage {
  @ViewChild('container', { static: true }) container!: ElementRef<HTMLDivElement>;
  sections!: HTMLElement[];
  current = 0;
  isScrolling = false;
  
  // Scroll configuratie
  private scrollDuration = 1200;

  ngAfterViewInit() {
    setTimeout(() => {
      this.sections = Array.from(this.container.nativeElement.children) as HTMLElement[];
    });
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    event.preventDefault();

    if (this.isScrolling) return;

    if (event.deltaY > 0 && this.current < this.sections.length - 1) this.current++;
    else if (event.deltaY < 0 && this.current > 0) this.current--;
    else return;

    // Custom scroll functie met meer controle
    this.scrollToSection(this.sections[this.current]);
  }

  private scrollToSection(target: HTMLElement) {
    if (!target || this.isScrolling) return;

    this.isScrolling = true;
    const start = window.scrollY;
    const end = target.offsetTop;
    const distance = end - start;
    let startTime: number | null = null;

    // Easing functie voor soepele animatie
    const easeInOutCubic = (t: number): number => 
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / this.scrollDuration, 1);
      const ease = easeInOutCubic(progress);

      window.scrollTo(0, start + distance * ease);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this.isScrolling = false;
      }
    };

    requestAnimationFrame(animate);
  }

  // Handige methoden om snelheid aan te passen
  setScrollSpeed(speed: 'slow' | 'normal' | 'fast') {
    switch(speed) {
      case 'slow':
        this.scrollDuration = 1200;
        break;
      case 'normal':
        this.scrollDuration = 900;
        break;
      case 'fast':
        this.scrollDuration = 500;
        break;
    }
  }
}