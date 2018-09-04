import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbDataTableComponent } from './ngb-data-table.component';

describe('NgbDataTableComponent', () => {
  let component: NgbDataTableComponent;
  let fixture: ComponentFixture<NgbDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
