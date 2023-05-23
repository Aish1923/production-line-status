import { TestBed } from '@angular/core/testing';

import { IconService } from './icon.service';
import { stateIcon,machineIcon } from 'src/app/data/constants/icondata';

describe('IconService', () => {
  let service: IconService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IconService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getStateIcon', () => {
    it('should return the correct state icon for a given condition', () => {
      const condition: keyof typeof stateIcon = 'Running';
      const expectedIcon = stateIcon[condition];
      const result = service.getStateIcon(condition);
      
      expect(result).toEqual(expectedIcon);
    });
  });
  describe('getMachineIcon', () => {
    it('should return the correct icon icon for a given machine', () => {
      const condition: keyof typeof machineIcon = 'Closer';
      const expectedIcon = machineIcon[condition];
      const result = service.getMachineIcon(condition);

      expect(result).toEqual(expectedIcon);
    });
  });
});
