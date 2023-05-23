export type MachineType = 'Scale' | 'Attacher' | 'Packer' | 'Closer';

export type StateType = "Running" | "Alarm" | "Warning";

export type MachineDetail = {
  id: number,
  name: MachineType,
  state: StateType
}
