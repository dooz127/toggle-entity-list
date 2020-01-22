import { LitElement, html, customElement, property, TemplateResult, CSSResult, css, PropertyValues } from 'lit-element';
import { HomeAssistant, hasConfigOrEntityChanged } from 'custom-card-helpers';
import { ToggleEntityListElementConfig, ToggleEntityElementConfig } from './types';
import { ELEMENT_VERSION } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  TOGGLE-ENTITY-LIST-ELEMENT \n%c  ${localize('common.version')} ${ELEMENT_VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

@customElement('toggle-entity-list-element')
export class ToggleEntityListElement extends LitElement {
  @property() public hass?: HomeAssistant;
  @property() private _config?: ToggleEntityListElementConfig;
  @property() private _configEntities?: ToggleEntityElementConfig[];
  
  set hass(hass: HomeAssistant) {
    this._hass = hass;
    for (const el of Array.from(
      this.shadowRoot!

  public setConfig(config: ToggleEntityListElementConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (!config.entities) {
      throw new Error('Invalid configuration: No entities defined');
    }
    
    const entities = processConfigEntities(config.entities);
         
    this._config = config;
    this._configEntities = entities;
  }

  protected shouldUpdate(changedProps: PropertyValues): boolean {
    return hasConfigOrEntityChanged(this, changedProps, false);
  }

  protected render(): TemplateResult | void {
    if (!this._config || !this.hass) {
      return html``;
    }

    const _entity = this.hass.states[this._config.entity];

    const name =
      this._config.name !== undefined
        ? this._config.name
        : _entity
        ? _entity.attributes.friendly_name || _entity.entity_id
        : undefined;

    return html`
      <div class="toggle-entity-list-element">
        <ha-entity-toggle .hass=${this.hass} .stateObj=${_entity}></ha-entity-toggle>
        <div>${name}</div>
      </div>
    `;
  }
  
  static get styles(): CSSResult {
    return css`
      ha-entity-toggle {
        margin-right: 16px;
      }

      .toggle-entity-element {
        display: flex;
        flex-direction: horizontal;
        align-items: center;
        padding: 0 8px 0 16px;
      }
    `;
  }
  
  private renderEntity(entityConf: ToggleEntityElementConfig): TemplateResult {
    const element = createElement(entityConf);
    if (this._hass) {
      element.hass = this._hass;
    }
    
    return html`
      <div class="toggle-entity-element">
        <ha-entity-toggle .hass=${this.hass} .stateObj=${element}></ha-entity-toggle>
        <div>${name}</div>
      </div>
    `;
        
}
