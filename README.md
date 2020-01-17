# :round_pushpin: Toggle Element

Add a :round_pushpin:Toggle Element to your [Home Assistant](https://www.home-assistant.io/) set-up. May be useful for configuring a  [Lovelace Picture Elements card](https://www.home-assistant.io/lovelace/picture-elements/) with toggle UI objects, such as a [Material Web Components](https://material.io/develop/web/components/) switch, checkbox, or radio button. 

## Install

Install `toggle-element.js` as a `module`

```yaml
resources:
  - url: /local/toggle-element.js
    type: module
```

For more information, see Thomas Loven's [Lovelace-Plugins](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins) guide.

## Options

Name | Type<sup>[1](#footnotes)</sup> | Description | Notes
--- | --- | --- | ---
type | **key:value** | A [Lovelace custom element](https://developers.home-assistant.io/docs/en/lovelace_custom_card.html) key-value mapping for <nobr>:round_pushpin:Toggle Element</nobr> | Must be set to `custom:toggle-element`
entity | **key** | A [Home Assistant entity's](https://developers.home-assistant.io/docs/en/architecture_entities.html) identifier in the [backend](https://www.home-assistant.io/docs/backend/) to be presented as a :round_pushpin:Toggle Element in the [frontend](https://www.home-assistant.io/docs/frontend/) | Must be a valid `entity_id` value
toggle_type | key  | A predefined GUI object for the :round_pushpin:Toggle Element with support for these options: `mwc_switch`, `mwc_checkbox`, or `mwc_radio_buttons` | Default value is `mwc_switch`
name | string | A label for the :round_pushpin:Toggle Element | Default value is the specified [entity's](https://developers.home-assistant.io/docs/en/architecture_entities.html) `entity_id` or `friendly_name` 
secondary | string | A sub-label for the :round_pushpin:Toggle Element |
tap_action | map | An [action](#actions) to take on tap of `name` with support for these options: `more-info`, `call-service`, `navigate`, `url`, or `none` | `action: more-info`
hold_action | map | An [action](#actions) to take on hold of `name` with support for these options: `more-info`, `call-service`, `navigate`, `url`, or `none` |
double_tap_action | map | An [action](#actions) to take on double tap of `name` with support for these options: `more-info`, `toggle`, `call-service`, `navigate`, `url`, or `none`

### Actions

- `more-info`:  Display a [Lovelace](https://www.home-assistant.io/lovelace/) more-info dialog about specified entity
- `call-service`: Invoke a specified [Home Assistant](https://www.home-assistant.io/) `service` (see [action options](#action-options) for more information) for more information
- `navigate`: Navigate to a specified `Lovelace` panel (see [action options](#action-options) for more information)for more information)
- `url`: Navigate to a specified Internet location (see [action options](#action-options) for more information)for more information)
          
#### Action Options

Name | Type | Description | Example
--- | --- | --- | --- 
service         | string | Service to call when action is `call-service` | `media_player.media_play_pause`
service_data    | map    | Service data to include when `action` is `call-service` | `entity_id: media_player.bedroom`
navigation_path | string | Path to navigate to when action is `navigate`. | `/lovelace/0/`
url_path        | string | URL to open on click when action is `url`. | `https://www.google.com`                        
haptic          | string | Haptic feedback for the [Beta IOS App](http://home-assistant.io/ios/beta) with support for these options: `success`, `warning`, `failure`, `light`, `medium`, `heavy`, or `selection`. |

## Author

- [Duy Nguyen](https://www.github.com/dooz127)

## Acknowledgments

I relied on these persons' repositories for a lot of ideas and best practices:
- [Thomas Loven](https://github.com/thomasloven/)
- [Ian T. Rich](https://github.com/iantrich)

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for more information.

## Footnotes

1. **Bold** `type` indicates the option must be specified. 
