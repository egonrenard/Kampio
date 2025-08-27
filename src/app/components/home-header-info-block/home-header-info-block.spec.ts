import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeHeaderInfoBlock } from './home-header-info-block';

describe('HomeHeaderInfoBlock', () => {
  let component: HomeHeaderInfoBlock;
  let fixture: ComponentFixture<HomeHeaderInfoBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeHeaderInfoBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeHeaderInfoBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
