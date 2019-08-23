import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfraTowerComponent } from './infra-tower.component';

describe('InfraTowerComponent', () => {
  let component: InfraTowerComponent;
  let fixture: ComponentFixture<InfraTowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfraTowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfraTowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
