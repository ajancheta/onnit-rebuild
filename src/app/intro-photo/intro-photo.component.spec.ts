import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroPhotoComponent } from './intro-photo.component';

describe('IntroPhotoComponent', () => {
  let component: IntroPhotoComponent;
  let fixture: ComponentFixture<IntroPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
