:atom_symbol: # Toggle Picture Element [@dooz127](https://www.github.com/dooz127)

Add a [Lovelace](https://www.home-assistant.io/lovelace) toggle element to your [Home Assistant](https://www.home-assistant.io/) set-up.

For installation instructions [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).


## Install

Install `toggle-element.js` as a `module`

```yaml
resources:
  - url: /local/toggle-picture-element.js
    type: module
```

## Options

| Name              | Type    | Requirement  | Description                                                                                                   | Default                                |  
| ----------------- | ------- | ------------ | --------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| type              | string  | **Required** | `custom:ha-toggle-entity`                                                                                        |                                     |
| entity            | string  | **Required** | The `entity_id` of the toggle element.                                                                          |                                     |
| toggle_type       | string  | Optional     | A GUI object representing the toggle element. *See [toggle type options](#toggle-type-options)*.             | `ha_entity_toggle`                  |
| name              | string  | Optional     | A label for the toggle element.                                                                                  | Default `Lovelace` `entity` name    |
| secondary         | string  | Optional     | A sub-label for the toggle element.                                                                              |                                     |
| tap_action        | map     | Optional     | Action to take on tap of `name`. *See [action options](#action-options).*                                        | `action: more-info`                 |
| hold_action       | map     | Optional     | Action to take on hold of `name`. *See [action options](#action-options).*                                      | `none`                              | 
| double_tap_action | map     | Optional     | Action to take on double tap of `name`. *See [action options](#action-options).*                                | `action: none`                      |

## Toggle Type Options

| Value              | Type                                    | Description                                   
| ----------------- | ------- | ------------------------------------------------------- | ----------------------------------------------------- | ------------------- | 
| type              | string  | `icon`, `entity_picture`, `material_switch`, `checkbox` | The type of token representing the toggle element | `icon`              |  
| ha_entity_toggle
| checkbox
| radio_buttons
          
## Action Options

| Name            | Type   | Default | Supported options                                                        | Description                                                                                               |
| --------------- | ------ | ------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| action          | string | toggle  | `more-info`, `toggle`, `call-service`, `navigate`, `url`, `none`,        | Action to perform                                                                                               |
| entity          | string | none    | Any entity id                                                            | **Only valid for `action: more-info`** to override the entity on which you want to call `more-info`        |
| navigation_path | string | none    | Eg: `/lovelace/0/`                                                       | Path to navigate to (e.g. `/lovelace/0/`) when action defined as navigate                                     |
| url_path        | string | none    | Eg: `https://www.google.com`                                             | URL to open on click when action is `url`.                                                                     |
| service         | string | none    | Any service                                                              | Service to call (e.g. `media_player.media_play_pause`) when `action` defined as `call-service`                  |
| service_data    | map    | none    | Any service data                                                         | Service data to include (e.g. `entity_id: media_player.bedroom`) when `action` defined as `call-service`. |
| haptic          | string | none    | `success`, `warning`, `failure`, `light`, `medium`, `heavy`, `selection` | Haptic feedback for the [Beta IOS App](http://home-assistant.io/ios/beta)                                     |

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments
I relied on these persons' repositories for a lot of ideas:
[Thomas Loven](https://github.com/thomasloven/)
[Ian T. Rich](https://github.com/iantrich)

