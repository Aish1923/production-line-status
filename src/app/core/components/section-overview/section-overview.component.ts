import { Component } from '@angular/core';
import { IconService } from '../../../shared/services/icon.service';
import { DataService } from '../../../shared/services/data.service';
import { machineIcon, stateIcon } from '../../../data/constants/icondata';
import { MachineDetail } from 'src/app/data/interfaces/state';
import { Icon, IconStyle } from 'src/app/data/interfaces/icon';
import { getStateIcon, getStateStyles, getStateIconStyles } from '../../helpers/icon-helper';

@Component({
  selector: 'app-section-overview',
  templateUrl: './section-overview.component.html',
  styleUrls: ['./section-overview.component.scss']
})
export class SectionOverviewComponent {
  data: MachineDetail[] = [];

  constructor(private iconService: IconService, private dataService: DataService) { }

  /* get the data from dummy JSON file */
  ngOnInit() {
    this.dataService.getData().subscribe((data: MachineDetail[]): void => {
      this.data = data;
    });
  }

  /* get state icon to be displayed in the overview panel */
  getStateIcon(state: MachineDetail): string {
    return getStateIcon(this.iconService, state);
  }

  /* get styles for the state icon to be displayed in the overview panel */
  getStateStyles(state: MachineDetail): Partial<IconStyle> {
    return getStateStyles(this.iconService, state);
  }

  /* get styles for the state icon to be displayed in the overview panel */
  getStateIconStyles(state: MachineDetail): Partial<IconStyle> {
    return getStateIconStyles(this.iconService, state);
  }

  /* get details of icons to be displayed on the nav bar based on machine */
  getMachineIcon(state: MachineDetail): string {
    return machineIcon[state.name].icon;
  }

}

