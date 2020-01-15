import { LitElement, html, customElement, property, TemplateResult, CSSResult, css } from 'lit-element';
import { HomeAssistant } from 'custom-card-helpers';
import { TogglePictureElementConfig } from './types';
import { VERSION } from './const';
import { localize } from './localize/localize';

/* eslint no-console: 0 */
console.info(
  `%c  TOGGLE-PICTURE-ELEMENT \n%c  ${localize('common.version')} ${VERSION}    `,
  'color: orange; font-weight: bold; background: black',
  'color: white; font-weight: bold; background: dimgray',
);

@customElement('toggle-picture-element')
export class TogglePictureElement extends LitElement {
  @property() public hass?: HomeAssistant;
  @property() private _config?: TogglePictureElementConfig;

  public setConfig(config: TogglePictureElementConfig): void {
    if (!config) {
      throw new Error(localize('common.invalid_configuration'));
    }

    if (!config.entity) {
      // TODO: localize
      throw new Error('Invalid configuration: No entity defined');
    }

    this._config = config;
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
      <div>
        <div class="toggle-picture-element-row">
          <ha-entity-toggle .hass=${this.hass} .stateObj=${_entity}></ha-entity-toggle>
          <div>${name}</div>
        </div>
      </div>
    `;
  }
  static get styles(): CSSResult {
    return css`
      .toggle-picture-element-row {
        display: flex;
        flex-direction: horizontal;
        align-items: center;
        padding: 0 8px 0 16px;
      }
    `;
  }
}
