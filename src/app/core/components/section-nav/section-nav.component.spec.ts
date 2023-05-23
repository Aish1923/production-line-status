import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SectionNavComponent } from './section-nav.component';
import { DataService } from 'src/app/shared/services/data.service';
import { IconService } from 'src/app/shared/services/icon.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SectionNavComponent', () => {
  let component: SectionNavComponent;
  let fixture: ComponentFixture<SectionNavComponent>;
  let iconService: IconService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SectionNavComponent],
      providers: [IconService, DataService]
    });
    fixture = TestBed.createComponent(SectionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render number of navs depending on the data from json', () => {
    const navTabs = fixture.nativeElement.querySelectorAll('nav');
    expect(navTabs.length).toBe(component.data.length);
  });
});
