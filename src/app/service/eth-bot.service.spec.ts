import { TestBed } from '@angular/core/testing';

import { EthBotService } from './eth-bot.service';

describe('EthBotService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EthBotService = TestBed.get(EthBotService);
    expect(service).toBeTruthy();
  });
});
