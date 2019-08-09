import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillabilityComponent } from './billability.component';

describe('BillabilityComponent', () => {
  let component: BillabilityComponent;
  let fixture: ComponentFixture<BillabilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillabilityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
