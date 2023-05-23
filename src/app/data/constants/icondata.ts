
import { StateIconList, MachineIconList } from '../../data/interfaces/icon';
export const stateIcon: StateIconList = {
    Running: {
        icon: 'settings_backup_restore',
        color: 'black',
        iconcolor: '#289E04',
        backgroundColor: '#DCDCDC'
    },
    Warning: {
        icon: 'warning',
        color: 'white',
        iconcolor: 'white',
        backgroundColor: '#FF9704'
    },
    Alarm: {
        icon: 'error_outline',
        color: 'white',
        iconcolor: 'white',
        backgroundColor: '#FE3636'
    }
}

export const machineIcon: MachineIconList = {
    Scale: {
        icon: 'move_to_inbox'
    },
    Attacher: {
        icon: 'list_alt'
    },
    Packer: {
        icon: 'inventory_2'
    },
    Closer: {
        icon: 'grid_on'
    }
}