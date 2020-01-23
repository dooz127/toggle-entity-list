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
  @property() public _hass?: HomeAssistant;
  @property() private _config?: ToggleEntityListConfig;
  
  public getCardSize(): number {
    return 1;
  }
  
  public setConfig(config: ToggleEntityListConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    } else if (!Array.isArray(config.entities)) {
      throw new Error("Invalid configuration: entities required");
    }

    this._config = config;
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
        ${this._config.entities.map(
          (entityConf: ToggleEntityConfig) => {
            const entity = this.hass.states[entityConf.entity];
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
          }
        )}
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
