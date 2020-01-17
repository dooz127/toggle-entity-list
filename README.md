# :round_pushpin: Toggle Element

Add a :round_pushpin:Toggle Element to your [Home Assistant](https://www.home-assistant.io/) set-up. May be useful for configuring a  [Lovelace Picture Elements card](https://www.home-assistant.io/lovelace/picture-elements/) with a [Material Web Components switch](https://material-components.github.io/material-components-web-catalog/#/component/switch) switch. 

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
name | string | A label for the :round_pushpin:Toggle Element | Default value is the specified [entity's](https://developers.home-assistant.io/docs/en/architecture_entities.html) `entity_id` or `friendly_name` 

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
