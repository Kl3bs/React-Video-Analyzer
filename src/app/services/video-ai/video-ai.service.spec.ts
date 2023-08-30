import { TestBed } from '@angular/core/testing';

import { VideoAiService } from './video-ai.service';

describe('VideoAiService', () => {
  let service: VideoAiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoAiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
