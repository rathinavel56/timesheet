import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportTimeSheetComponent } from './export-time-sheet.component';

describe('ExportTimeSheetComponent', () => {
  let component: ExportTimeSheetComponent;
  let fixture: ComponentFixture<ExportTimeSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportTimeSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportTimeSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
