import { TestBed, inject } from '@angular/core/testing';

import { AuthServiceService } from './auth.service';

describe('AuthServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthServiceService]
    });
  });

  it('should ...', inject([AuthServiceService], (service: AuthServiceService) => {
    expect(service).toBeTruthy();
  }));
});
