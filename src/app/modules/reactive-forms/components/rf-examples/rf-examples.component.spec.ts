import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfExamplesComponent } from './rf-examples.component';

describe('RfExamplesComponent', () => {
  let component: RfExamplesComponent;
  let fixture: ComponentFixture<RfExamplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfExamplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
