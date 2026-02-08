# @move-elevator/eslint-config-typescript

A shareable Eslint configuration for TypeScript projects.

## Installation

```bash
npm i -D @move-elevator/eslint-config-typescript
```

### Peer Dependencies

This package requires the following peer dependencies:

```bash
npm i -D eslint eslint-plugin-perfectionist eslint-plugin-prefer-arrow-functions typescript-eslint
```

## Usage

Create an Eslint config file  like `eslint.config.mjs` in your project root and extend this configuration:

```javascript
import config from '@move-elevator/eslint-config-typescript'

export default [
  ...config,
  {
    // your custom rules
  }
]
```

## What's Included

This configuration extends:

- `@eslint/js` recommended rules
- `typescript-eslint` recommended rules
- `eslint-plugin-perfectionist` alphabetical sorting rules

Additional rules:

- `no-undef`: error
- `prefer-arrow-functions/prefer-arrow-functions`: error
- `quotes`: single quotes required
- `semi`: no semicolons

## License

[MIT](LICENSE.md)
