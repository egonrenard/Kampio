import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCampCard } from './home-camp-card';

describe('HomeCampCard', () => {
  let component: HomeCampCard;
  let fixture: ComponentFixture<HomeCampCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCampCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCampCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
