import { TestBed } from '@angular/core/testing';

import { ClassicListService } from './classic-list.service';

describe('ClassicListService', () => {
  let service: ClassicListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClassicListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
