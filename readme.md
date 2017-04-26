# babel-plugin-modules-map

Map configuration for modules, as a Babel plugin. Rewrites module specifiers to apply aliases.

For example, this code:

```js
import mod from 'foo';
```

Will be transformed into:

```js
import mod from 'bar';
```

When using the config: `{foo: 'bar'}`.

## Install

```
yarn add babel-plugin-modules-map --dev
```

## Usage

In your `.babelrc` add:

```json
{
  "plugins": [
    ["modules-web-compat", {
      "foo": "bar"
    }]
  ]
}
```

The second argument being your map configuration. A map is like an alias from one name to another. Partial matches are also applied so that:

```js
import mod from 'foo/baz';
```

With the config:

```json
{
  "plugins": [
    ["modules-web-compat", {
      "foo": "bar"
    }]
  ]
}
```

Will become:

```js
import mod from 'bar/baz';
```

## License

BSD 2 Clause