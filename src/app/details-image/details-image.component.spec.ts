import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsImageComponent } from './details-image.component';

describe('DetailsImageComponent', () => {
  let component: DetailsImageComponent;
  let fixture: ComponentFixture<DetailsImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
