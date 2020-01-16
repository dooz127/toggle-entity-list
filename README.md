:atom_symbol: # Toggle Element [@dooz127](https://www.github.com/dooz127)

Add a [Lovelace](https://www.home-assistant.io/lovelace) toggle element to your [Home Assistant](https://www.home-assistant.io/) set-up.



## Install

Install `toggle-element.js` as a `module`

```yaml
resources:
  - url: /local/toggle-element.js
    type: module
```

For more information, see Thomas Loven's [Lovelace-Plugins](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins) guide.

## Options

| Name | Type<sup>1</sup>(#footnotes) | Description | Default |  
| --- | --- | --- | --- |
| type | **string** | `custom:ha-toggle-entity` | |                                                                                     
| entity | **string** | The `entity_id` of the `Toggle element`. | |
| toggle_type | string  | A predefined GUI object representing the `Toggle Element.` Supported options are `mwc_switch`, `mwc_checkbox`, or `mwc_radio_buttons`. | `mwc_switch` |
| name | string | A label for the `Toggle Element`. | `Lovelace` `entity` name |
| secondary | string | A sub-label for the `Toggle Element`. | |
| tap_action | map | Action to take on tap of `name`. Supported options are `more-info`, `call-service`, `navigate`, `url`, or `none`. | `action: more-info` 
- `more-info`:  Display a `Lovelace` `more-info` pop-card about the `entity`
- `call-service`: Invoke a specified `Home Assistant` `service`
- `navigate`: Navigate to a specified `Lovelace` panel
- `url`: Navigate to a specified Internet location | |
| hold_action | map | Optional | Action to take on hold of `name`. Supported options are `more-info`, `call-service`, `navigate`, `url`, or `none`
| double_tap_action | map | Optional | Action to take on double tap of `name`. Supported options are `more-info`, `toggle`, `call-service`, `navigate`, `url`, or `none`. See [action options](#action-options) for more information. |
          
## Action Options

| Name | Supported Options | Description | Default |
| --- | --- | --- | --- |
| more-info
| entity | string | none | Any entity id | **Only valid for `action: more-info`** to override the entity on which you want to call `more-info`: ` |
| navigation_path | string | none    | Eg: `/lovelace/0/`                                                       | Path to navigate to (e.g. `/lovelace/0/`) when action defined as navigate                                     |
| url_path        | string | none    | Eg: `https://www.google.com`                                             | URL to open on click when action is `url`.                                                                     |
| service         | string | none    | Any service                                                              | Service to call (e.g. `media_player.media_play_pause`) when `action` defined as `call-service`                  |
| service_data    | map    | none    | Any service data                                                         | Service data to include (e.g. `entity_id: media_player.bedroom`) when `action` defined as `call-service`. |
| haptic          | string | none    | `success`, `warning`, `failure`, `light`, `medium`, `heavy`, `selection` | Haptic feedback for the [Beta IOS App](http://home-assistant.io/ios/beta)                                     |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
I relied on these persons' repositories for a lot of ideas:
- [Thomas Loven](https://github.com/thomasloven/)
- [Ian T. Rich](https://github.com/iantrich)

## Footnotes

1. **Bold** `type` indicates the option must be defined. 
