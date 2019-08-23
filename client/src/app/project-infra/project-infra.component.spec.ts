import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInfraComponent } from './project-infra.component';

describe('ProjectInfraComponent', () => {
  let component: ProjectInfraComponent;
  let fixture: ComponentFixture<ProjectInfraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectInfraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectInfraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
