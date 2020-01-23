export interface ToggleEntityListConfig {
  type: string;
  entities: ToggleEntityConfig[];
}

export interface ToggleEntityConfig {
  entity: string;
  name?: string;
  type?: string;
}
