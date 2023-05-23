import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MachineDetail } from 'src/app/data/interfaces/state';

describe('DataService', () => {
  let httpMock: HttpTestingController;
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DataService]
    });
    service = TestBed.inject(DataService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve data from the server', () => {
    const testData: MachineDetail[] = [
      {
        "id": 1,
        "name": "Scale",
        "state": "Alarm"
      },
      {
        "id": 2,
        "name": "Attacher",
        "state": "Alarm"
      },
      {
        "id": 3,
        "name": "Packer",
        "state": "Alarm"
      },
      {
        "id": 4,
        "name": "Closer",
        "state": "Alarm"
      }
    ]

    service.getData().subscribe((data: MachineDetail[]) => {
      expect(data).toEqual(testData);
    });

    const req = httpMock.expectOne('assets/data.json');
    expect(req.request.method).toBe('GET');
    req.flush(testData);
    httpMock.verify();
  });

});
