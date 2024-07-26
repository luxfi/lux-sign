# @luxwallet/lux-sign

## Getting Started

install by `npm`, `yarn` etc

```bash
npm i -S @luxwallet/lux-sign
# or
yarn add @luxwallet/lux-sign
```

## APIs

### Signature

For every use cases, we provide two kinds of implementations: by Javascript and by WebAssembly. for example:

```js
import * as SignWasm from '@luxwallet/lux-sign/es/sign-wasm-lux'
```

## Development

### Build

```sh
# build for web
npm run build:umd

# build for nodejs/react-native
npm run build:cjs
```

### Test

We use `jest`, `ts-jest` to test source code, in all spec files, we import members to be test from `./src` **DIRECTLY**

```sh
npm run test
```