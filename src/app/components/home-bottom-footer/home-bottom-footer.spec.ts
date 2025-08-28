import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBottomFooter } from './home-bottom-footer';

describe('HomeBottomFooter', () => {
  let component: HomeBottomFooter;
  let fixture: ComponentFixture<HomeBottomFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeBottomFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeBottomFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
