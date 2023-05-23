import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOverviewComponent } from './section-overview.component';
import { DataService } from 'src/app/shared/services/data.service';
import { IconService } from 'src/app/shared/services/icon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SectionOverviewComponent', () => {
  let component: SectionOverviewComponent;
  let fixture: ComponentFixture<SectionOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SectionOverviewComponent],
      providers: [IconService, DataService]
    });
    fixture = TestBed.createComponent(SectionOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render machine overviews depending on the data from json', () => {
    const machineOverviews = fixture.nativeElement.querySelectorAll('.machine-overview');
    expect(machineOverviews.length).toBe(component.data.length);
  });

});
