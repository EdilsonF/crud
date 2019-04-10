import { TestBed } from '@angular/core/testing';

import { PessoaDataService } from './pessoa-data.service';

describe('PessoaDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PessoaDataService = TestBed.get(PessoaDataService);
    expect(service).toBeTruthy();
  });
});
