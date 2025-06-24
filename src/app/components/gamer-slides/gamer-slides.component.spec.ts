import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamerSlidesComponent } from './gamer-slides.component';

describe('GamerSlidesComponent', () => {
  let component: GamerSlidesComponent;
  let fixture: ComponentFixture<GamerSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamerSlidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GamerSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
