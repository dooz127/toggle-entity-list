import { LitElement, html, customElement, property, TemplateResult, CSSResult, css, PropertyValues } from 'lit-element';
import { HomeAssistant, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { ToggleEntityListConfig, ToggleEntityConfig } from './types';
import { ELEMENT_VERSION, isValidEntityId } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  TOGGLE-ENTITY-LIST \n%c  ${localize('common.version')} ${ELEMENT_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

@customElement('toggle-entity-list')
export class ToggleEntityList extends LitElement {
  @property() public hass?: HomeAssistant;
  @property() private _config?: ToggleEntityListConfig;
  @property() private _configEntities?: ToggleEntityConfig[];

  public setConfig(config: ToggleEntityListConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    const entities = this.processConfigEntities(config.entities);

    this._config = config;
    this._configEntities = entities;
  }

  private processConfigEntities(entities: Array<ToggleEntityConfig | string>): ToggleEntityConfig[] {
    if (!entities || !Array.isArray(entities)) {
      throw new Error('Entities need to be an array');
    }

    return entities.map((entityConf, index) => {
      if (typeof entityConf === 'object' && !Array.isArray(entityConf) && entityConf.type) {
        return entityConf;
      }

      let config: ToggleEntityConfig;

      if (typeof entityConf === 'string') {
        // tslint:disable-next-line:no-object-literal-type-assertion
        config = { entity: entityConf };
      } else if (typeof entityConf === 'object' && !Array.isArray(entityConf)) {
        if (!entityConf.entity) {
          throw new Error(`Entity object at position ${index} is missing entity field.`);
        }
        config = entityConf as ToggleEntityConfig;
      } else {
        throw new Error(`Invalid entity specified at position ${index}.`);
      }

      if (!isValidEntityId(config.entity)) {
        throw new Error(`Invalid entity ID at position ${index}: ${config.entity}`);
      }

      return config;
    });
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected render(): TemplateResult | void {
    if (!this._config || !this.hass) {
      return html``;
    }

    return html`
      <div class="toggle-entity-list">
        ${this._configEntities!.map(entityConf => {
          const entity = this.hass!.states[entityConf.entity];
          const name =
            entityConf.name != undefined
              ? entityConf.name
              : entity
              ? entity.attributes.friendly_name || entity.entity_id
              : undefined;

          return html`
            <div class="toggle-entity">
              <ha-entity-toggle .hass=${this.hass} .stateObj=${entity}></ha-entity-toggle>
              <div>${name}</div>
            </div>
          `;
        })}
      </div>
    `;
  }

  static get styles(): CSSResult {
    return css`
      ha-entity-toggle {
        margin-right: 16px;
      }

      .toggle-entity {
        display: flex;
        flex-direction: horizontal;
        align-items: center;
        padding: 0 8px 0 16px;
        min-height: 40px;
      }
    `;
  }
}
