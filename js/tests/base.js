var test_base = {
  name: 'Base test',
  oldObj: {
    "schemaVersion": "1.0",
    "description": {
      "whatItDoes": {
        "en": "What it does.",
        "fr": "Qu'est-ce que ça fait."
      }
    },
    "category": "123456",
    "name": {
      "en": "Name",
      "fr": "Nom"
    },
    "licences": [
      {
        "URL": {
          "en": "https://github.com/test/en/LICENSE.txt",
          "fr": "https://github.com/test/fr/LICENSE.txt"
        },
        "spdxID": "licence"
      }
    ],
    "tags": {
      "en": [
        "tag",
      ],
      "fr": [
        "tag",
      ]
    },
    "releases": [
      {
        "adminCode": "test",
        "contact": {
          "email": "contact@test.com"
        },
        "date": {
          "created": "2019-01-01",
          "metadataLastUpdated": "2019-08-22"
        },
      }
    ]
  },
  newObj: {
    "schemaVersion": "1.0",
    "description": {
      "whatItDoes": {
        "en": "What it does.",
        "fr": "Qu'est-ce que ça fait."
      }
    },
    "category": "123456",
    "name": {
      "en": "Name",
      "fr": "Nom"
    },
    "licences": [
      {
        "URL": {
          "en": "https://github.com/test/en/LICENSE.txt",
          "fr": "https://github.com/test/fr/LICENSE.txt"
        },
        "spdxID": "licence"
      }
    ],
    "tags": {
      "en": [
        "tag",
      ],
      "fr": [
        "tag",
      ]
    },
    "releases": [
      {
        "adminCode": "test",
        "contact": {
          "email": "contact@test.com"
        },
        "date": {
          "created": "2019-01-01",
          "metadataLastUpdated": "2019-08-23"
        },
      }
    ]
  },
  propPath: 'releases',
  onValue: 'adminCode',

  expected: {
    "schemaVersion": "1.0",
    "description": {
      "whatItDoes": {
        "en": "What it does.",
        "fr": "Qu'est-ce que ça fait."
      }
    },
    "category": "123456",
    "name": {
      "en": "Name",
      "fr": "Nom"
    },
    "licences": [
      {
        "URL": {
          "en": "https://github.com/test/en/LICENSE.txt",
          "fr": "https://github.com/test/fr/LICENSE.txt"
        },
        "spdxID": "licence"
      }
    ],
    "tags": {
      "en": [
        "tag",
      ],
      "fr": [
        "tag",
      ]
    },
    "releases": [
      {
        "adminCode": "test",
        "contact": {
          "email": "contact@test.com"
        },
        "date": {
          "created": "2019-01-01",
          "metadataLastUpdated": "2019-08-23"
        },
      }
    ]
  }
};
