import { StateType, MachineType } from "./state";

export type Icon = {
    icon: string,
    color: string,
    backgroundColor: string,
    iconcolor: string
}

export type StateIconList = {
    [key in StateType]: Icon
}
export type MachineIconList = {
    [key in MachineType]:Pick<Icon,"icon">
}

export type IconStyle = {
    'background-color': string,
    'color': string
}

