import { TestBed, inject } from '@angular/core/testing';

import { JeopardyServiceService } from './jeopardy-service.service';

describe('JeopardyServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JeopardyServiceService]
    });
  });

  it('should be created', inject([JeopardyServiceService], (service: JeopardyServiceService) => {
    expect(service).toBeTruthy();
  }));
});
