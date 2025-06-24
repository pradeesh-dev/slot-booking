import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenueInfoComponent } from './address.component';

describe('VenueInfoComponent', () => {
  let component: VenueInfoComponent;
  let fixture: ComponentFixture<VenueInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VenueInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VenueInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
