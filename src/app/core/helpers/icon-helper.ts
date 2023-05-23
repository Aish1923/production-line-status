import { MachineDetail } from 'src/app/data/interfaces/state';
import { IconService } from '../../shared/services/icon.service';
import { IconStyle } from 'src/app/data/interfaces/icon';

/* get icon to be displayed on the nav bar based on state */
export function getStateIcon(iconService: IconService, state: MachineDetail): string {
    return iconService.getStateIcon(state.state).icon;
}

/* return styling for the overview for each machine based on state */
export function getStateStyles(iconService: IconService, state: MachineDetail): Partial<IconStyle> {
    return {
        'background-color': iconService.getStateIcon(state.state).backgroundColor,
        'color': iconService.getStateIcon(state.state).color
    };
}

/* return style for the icon based on state */
export function getStateIconStyles(iconService: IconService, state: MachineDetail): Partial<IconStyle> {
    return {
        color: iconService.getStateIcon(state.state).iconcolor
    };
}