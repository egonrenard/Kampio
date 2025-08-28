import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBottom } from './home-bottem';

describe('HomeBottem', () => {
  let component: HomeBottom;
  let fixture: ComponentFixture<HomeBottom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBottom]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBottom);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
