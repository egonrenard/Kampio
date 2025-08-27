import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBodyCard } from './home-body-card';

describe('HomeBodyCard', () => {
  let component: HomeBodyCard;
  let fixture: ComponentFixture<HomeBodyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBodyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBodyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
