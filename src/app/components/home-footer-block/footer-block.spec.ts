import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBlock } from './footer-block';

describe('FooterBlock', () => {
  let component: FooterBlock;
  let fixture: ComponentFixture<FooterBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
