import { TestBed, inject } from '@angular/core/testing';

import { TaskEditGuardService } from '../../services/task-edit-guard/task-edit-guard.service';

describe('TaskEditGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskEditGuardService]
    });
  });

  it('should ...', inject([TaskEditGuardService], (service: TaskEditGuardService) => {
    expect(service).toBeTruthy();
  }));
});
