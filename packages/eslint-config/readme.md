# @sunbeams/eslint-config

eslint to brighten your day

Uses, in order:

- `eslint:recommended`
- `plugin:@typescript-eslint/eslint-recommended`
- `plugin:@typescript-eslint/recommended`,
- `standard-with-typescript`,
- `prettier`

Also includes the `jest` plugin.

## Pre v1

This is an early version and things may change until some finer details are ironed out among projects that use sunbeams. Currently, use at your own `peril`.

## Why both standard and prettier?

I prefer standard, but the truth is there's a lot of value in what prettier does: code always looks the same. Unfortunately they conflict with each other a bit and `standard --format` isn't a great replacement. So, lint with standard and then have prettier disable whatever rules it needs to disable.

## Usage

Extend it in your eslint config:

```javascript
# .eslintrc.js

module.exports = {
  extends: ['@sunbeams']
}
```

And be sure to have a tsconfig.json at the root of your project (wherever your eslint config is) as well. The typescript eslint parser relies on it.

## License

@sunbeams/eslint-config is provided under the [Mozilla Public License 2.0](https://mozilla.org/MPL/2.0/).

A copy of the MPLv2 is included [license.md](/license.md) file for convenience.
