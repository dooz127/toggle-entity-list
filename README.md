:atom_symbol: # Toggle Picture Element [@dooz127](https://www.github.com/dooz127)

Add a [Lovelace](https://www.home-assistant.io/lovelace) toggle picture element to your [Home Assistant](https://www.home-assistant.io/) set-up.

For installation instructions [see this guide](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins).


## Install

Install `toggle-picture-element.js` as a `module`

```yaml
resources:
  - url: /local/toggle-picture-element.js
    type: module
```

## Options

| Name              | Type    | Requirement  | Description                                 | Default             |
| ----------------- | ------- | ------------ | ------------------------------------------- | ------------------- |
| type              | string  | **Required** | `custom:ha-toggle-entity`                   |                     |
| entity            | string  | **Required** | The `entity_id` of the "togglable" object   |                     |
| sigil             | string  | **Optional** | 
| name              | string  | **Optional** | The label for the `entity`                  | `entity_id`         |

## Item Options

| Name                | Type     | Requirement  | Description                                                         | Default             |
| ------------------- | -------- | ------------ | ------------------------------------------------------------------- | ------------------- |
| `card`              | `string` | **Optional** | A whole other Lovelace card configuration to build.                 |
| `entity`            | `string` | **Optional** | Home Assistant entity ID.                                           | `none`              |
| `name`              | `string` | **Optional** | Tooltip for main menu                                               | `Menu`              |
| `icon`              | `string` | **Optional** | mdi icon for main menu                                              | `none`              |
| `entity_picture`    | `string` | **Optional** | picture to display                                                  | `none`              |
| `tap_action`        | `map`    | **Optional** | Action to take on tap. See [action options](#action-options)        | `action: more-info` |
| `hold_action`       | `map`    | **Optional** | Action to take on hold. See [action options](#action-options)       | `none`              |
| `double_tap_action` | `map`    | **Optional** | Action to take on double tap. See [action options](#action-options) | `action: none`      |

## Action Options

| Name              | Type     | Default  | Supported options                                                        | Description                                                                                               |
| ----------------- | -------- | -------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| `action`          | `string` | `toggle` | `more-info`, `toggle`, `call-service`, `none`, `navigate`, `url`         | Action to perform                                                                                         |
| `entity`          | `string` | none     | Any entity id                                                            | **Only valid for `action: more-info`** to override the entity on which you want to call `more-info`       |
| `navigation_path` | `string` | none     | Eg: `/lovelace/0/`                                                       | Path to navigate to (e.g. `/lovelace/0/`) when action defined as navigate                                 |
| `url_path`        | `string` | none     | Eg: `https://www.google.com`                                             | URL to open on click when action is `url`.                                                                |
| `service`         | `string` | none     | Any service                                                              | Service to call (e.g. `media_player.media_play_pause`) when `action` defined as `call-service`            |
| `service_data`    | `map`    | none     | Any service data                                                         | Service data to include (e.g. `entity_id: media_player.bedroom`) when `action` defined as `call-service`. |
| `haptic`          | `string` | none     | `success`, `warning`, `failure`, `light`, `medium`, `heavy`, `selection` | Haptic feedback for the [Beta IOS App](http://home-assistant.io/ios/beta)                                 |
