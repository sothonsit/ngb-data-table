import { TestBed, inject } from '@angular/core/testing';

import { NgbDataTableService } from './ngb-data-table.service';

describe('NgbDataTableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgbDataTableService]
    });
  });

  it('should be created', inject([NgbDataTableService], (service: NgbDataTableService) => {
    expect(service).toBeTruthy();
  }));
});
