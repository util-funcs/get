import get from './../src/index';

let bucket = {};

beforeEach(() => {
  bucket = {
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
    point: 0,
    'social-media': '@doejohn',
    phone_mobile: '3323-232-32',
    '#hobbies': ['travel', 'edm'],
  };
});

afterEach(() => {
  bucket = {};
});

it('get nested object value.', () => {
  expect(get('name', bucket)).toEqual('John');
  expect(get('location.city', bucket)).toEqual('Londra');
  expect(get('social-media', bucket)).toEqual('@doejohn');
  expect(get('phone_mobile', bucket)).toEqual('3323-232-32');
  expect(get('#hobbies[0]', bucket)).toEqual('travel');
  expect(get('', bucket)).toEqual(bucket);
  expect(get('orders[0]', bucket)).toEqual({
    name: 'Headphone',
    price: 45.6,
    type: 'electronic',
  });
  expect(get('orders[0]name', bucket)).toEqual('Headphone');
  expect(get('orders[0]price', bucket)).toEqual(45.6);
  expect(get('orders[0]name.length', bucket)).toEqual(9);
});

it('handle default value.', () => {
  expect(get('#hobbies[0]', bucket)).toEqual('travel');
  expect(get('#hobbies[0].edm', bucket, false)).toBeFalsy();
});
