import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentDateTime: string | null = this.datepipe.transform((new Date), 'MM.dd.yyyy h:mm');
  ImagePath: string;
  constructor(public datepipe: DatePipe) {
    this.ImagePath = 'assets/Logo.png'
    setInterval(() => {
      this.currentDateTime = this.datepipe.transform((new Date), 'MM.dd.yyyy h:mm');
    }, 1000)

  }
}
