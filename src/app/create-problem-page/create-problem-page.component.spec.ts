import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProblemPageComponent } from './create-problem-page.component';

describe('CreateProblemPageComponent', () => {
  let component: CreateProblemPageComponent;
  let fixture: ComponentFixture<CreateProblemPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProblemPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProblemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
