import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProblemFormComponent } from './create-problem-form.component';

describe('CreateProblemFormComponent', () => {
  let component: CreateProblemFormComponent;
  let fixture: ComponentFixture<CreateProblemFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProblemFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateProblemFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
