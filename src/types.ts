export interface ToggleEntityListElementConfig {
  type: string;
  entities: ToggleEntityConfig[];
}

export interface ToggleEntityConfig {
  type?: string;
  entity: string;
  name?: string;
}
