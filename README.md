# Toggle Picture Element [@dooz127](https://www.github.com/dooz127)

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
| entity            | string  | **Required** | The `entity_id` of the togglable object     |                     |
| name              | string  | **Optional** | The label for the `entity`                  | `entity_id`         |
