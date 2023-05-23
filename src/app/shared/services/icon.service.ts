import { Injectable } from '@angular/core';
import { Icon } from '../../data/interfaces/icon';
import { machineIcon, stateIcon } from '../../data/constants/icondata';

@Injectable({
  providedIn: 'root'
})


export class IconService {

  /*get details of state icon */
  getStateIcon(condition: keyof typeof stateIcon): Icon {
    return stateIcon[condition];
  }

  /*get details of machine icon to be displayed overview*/
  getMachineIcon(condition: keyof typeof machineIcon): Partial<Icon> {
    return machineIcon[condition];
  }

}
