import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdfExamplesComponent } from './tdf-examples.component';

describe('TdfExamplesComponent', () => {
  let component: TdfExamplesComponent;
  let fixture: ComponentFixture<TdfExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdfExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdfExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
