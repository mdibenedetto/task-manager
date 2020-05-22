import { TestBed, inject } from '@angular/core/testing';

import { TaskResolverService } from './task-resolver.service';

describe('TaskResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskResolverService]
    });
  });

  it('should ...', inject([TaskResolverService], (service: TaskResolverService) => {
    expect(service).toBeTruthy();
  }));
});
