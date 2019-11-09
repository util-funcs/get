# object-get

Deep dive into plain object and take value by key chaining.

[![npm version](https://badge.fury.io/js/%40util-funcs%2Fobject-get.svg)](https://badge.fury.io/js/%40util-funcs%2Fobject-get) [![Build Status](https://travis-ci.org/util-funcs/object-get.svg?branch=master)](https://travis-ci.org/util-funcs/object-get.svg?branch=master)

## Getting Started

```ts
import get from '@util-funcs/object-get';
```

### Installing

```sh
npm i @util-funcs/object-get --save
```

or

```sh
yarn add @util-funcs/object-get
```

### Examples

```javascript
const data = {
  name: 'John',
  surname: 'Doe',
  age: 34,
  location: {
    city: 'Londra',
    country: 'UK',
  },
  orders: [
    {
      name: 'Headphone',
      price: 45.6,
      type: 'electronic',
    },
    {
      name: 'Macbook Air 13.3 inch',
      price: 45.6,
      type: 'electronic',
    },
  ],
  '#hobbies': ['travel', 'edm'],
};
```

```javascript
  get('name', data)) === 'John'

  get('location.city', data) === 'Londra'

  get('#hobbies[0]', data) === 'travel'

  get('orders[0]name', data) === 'Headphone'

  get('orders[0]name.length', data) === 9

  get('orders[0]category', data, 'uncategorized') === 'uncategorized'
```

## Run tests

```ts
npm test
```

## Built With

- [TypeScript](https://www.typescriptlang.org)

## Versioning

We use [SemVer](http://semver.org/) for versioning.

## Authors

- [**Ahmet ATAY**](https://github.com/atayahmet) - _Initial work_

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
