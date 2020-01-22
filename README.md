# :round_pushpin: Toggle Entity List Element

Add a :round_pushpin:Toggle Entity List Element to your [Home Assistant](https://www.home-assistant.io/) set-up. May be useful for configuring a  [Lovelace Picture Elements card](https://www.home-assistant.io/lovelace/picture-elements/) with a list of [Material Web Components switches](https://material-components.github.io/material-components-web-catalog/#/component/switch). 

## Install

Install `toggle-entity-list-element.js` as a `module`

```yaml
resources:
  - url: /local/toggle-entity-list-element.js
    type: module
```

For more information, see Thomas Loven's [Lovelace-Plugins](https://github.com/thomasloven/hass-config/wiki/Lovelace-Plugins) guide.

## Options

Name | Type<sup>[1](#footnotes)</sup> | Description | Notes
--- | --- | --- | ---
type | **key:value** | A [Lovelace custom element](https://developers.home-assistant.io/docs/en/lovelace_custom_card.html) key-value mapping for :round_pushpin:Toggle Entity List Element | Must be set to `custom:toggle-entity-list-element`
entities | **key list** | A list of [Home Assistant entity](https://developers.home-assistant.io/docs/en/architecture_entities.html) identifiers in the [backend](https://www.home-assistant.io/docs/backend/) to be presented as a :round_pushpin:Toggle Entity List Element in the [frontend](https://www.home-assistant.io/docs/frontend/) | Must specify at least one valid entity
entity | **key** | A [Home Assistant entity's](https://developers.home-assistant.io/docs/en/architecture_entities.html) identifier in the [backend](https://www.home-assistant.io/docs/backend/) to be presented as a :round_pushpin:Toggle Element in the [frontend](https://www.home-assistant.io/docs/frontend/) | Must be a valid `entity_id` value
name | string | A label for a specified entity in the :round_pushpin:Toggle Entity List Element | Default value is the specified entity's `entity_id` or `friendly_name` 

## Author

- [Duy Nguyen](https://www.github.com/dooz127)

## Acknowledgments

I relied on these persons' repositories for ideas and best practices:
- [Thomas Loven](https://github.com/thomasloven/)
- [Ian T. Rich](https://github.com/iantrich)

## License

This project is licensed under the MIT License - see [LICENSE.md](LICENSE.md) for more information.

## Footnotes

1. **Bold** `type` indicates the option must be specified. 
