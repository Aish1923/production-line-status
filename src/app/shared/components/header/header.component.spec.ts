import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [DatePipe],
      imports: [MatIconModule]
    });
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the current date and time', () => {
    const currentDate = new Date();
    const formattedDate = component.datepipe.transform(currentDate, 'MM.dd.yyyy h:mm');
    expect(component.currentDateTime).toBe(formattedDate);
    const spanElm = fixture.nativeElement.querySelector('span');
    expect(spanElm.textContent).toBe(formattedDate);
  });
});
