import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathjaxViewerComponent } from './mathjax-viewer.component';

describe('MathjaxViewerComponent', () => {
  let component: MathjaxViewerComponent;
  let fixture: ComponentFixture<MathjaxViewerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathjaxViewerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathjaxViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
