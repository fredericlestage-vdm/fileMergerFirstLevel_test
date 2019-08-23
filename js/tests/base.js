var test_base = {
  name: 'Base test',
  oldObj: {
    test: 'test',
    magic: [{
      name: 'en'
    }]
  },
  newObj: {
    test: 'Potatoe',
    magic: [{
      name: 'hehe',
      style: 'fr'
    }]
  },
  propPath: 'magic',
  onValue: 'name',

  expected: {
    test: 'Potatoe',
    magic:[
      {
        name: 'en'
      }, {
        name: 'hehe',
        style: 'fr'
      }
    ]
  }
};
