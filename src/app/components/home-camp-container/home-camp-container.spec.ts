import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCampContainer } from './home-camp-container';

describe('HomeCampContainer', () => {
  let component: HomeCampContainer;
  let fixture: ComponentFixture<HomeCampContainer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeCampContainer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeCampContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
