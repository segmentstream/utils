# SegmentStream Utils

## Installation

Using npm

```bash
npm i --save @segmentstream/utils
```

or using yarn

```bash
yarn add @segmentstream/utils
```

## Adding to you project

```js
import cleanObject from '@segmentstream/utils/cleanObject'

const cleanedObject = cleanObject({ a: undefined, b: null, c: 'value' }) // { c: 'value'}
```

## Development

Execute `npm test` for run unit test!
