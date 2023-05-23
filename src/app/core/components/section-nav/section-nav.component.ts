import { Component } from '@angular/core';
import { IconService } from '../../../shared/services/icon.service';
import { DataService } from '../../../shared/services/data.service';
import { MachineDetail } from 'src/app/data/interfaces/state';
import { getStateIcon, getStateStyles, getStateIconStyles } from '../../helpers/icon-helper';
import { IconStyle } from 'src/app/data/interfaces/icon';

@Component({
  selector: 'app-section-nav',
  templateUrl: './section-nav.component.html',
  styleUrls: ['./section-nav.component.scss']
})
export class SectionNavComponent {
  data: MachineDetail[] = [];
  constructor(private iconService: IconService, private dataService: DataService) { }


 /* get the data from dummy JSON file */
  ngOnInit() {
    this.dataService.getData().subscribe((data:MachineDetail[]):void => {
      this.data = data;
    });
  }

  getStateIcon(state:MachineDetail): string {
    return getStateIcon(this.iconService, state);
  }

  getStateStyles(state: MachineDetail): Partial<IconStyle> {
    return getStateStyles(this.iconService, state);
  }

  getStateIconStyles(state: MachineDetail):  Partial<IconStyle> {
    return getStateIconStyles(this.iconService, state);
  }
 
}
