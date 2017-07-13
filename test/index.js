var MongoDates = require("./index");
var mongoDates = MongoDates({
  "$schema": "http://json-schema.org/draft-04/schema#",
  "definitions": {},
  "id": "http://example.com/example.json",
  "properties": {
    "birthDate": {
      "id": "/properties/birthDate",
      "type": "string",
      "format": "date"
    },
    "createDate": {
      "id": "/properties/createDate",
      "type": "string",
      "format": "date-time"
    },
    "firstName": {
      "id": "/properties/firstName",
      "type": "string"
    },
    "lastName": {
      "id": "/properties/lastName",
      "type": "string"
    }
  },
  "type": "object"
});

// format the json object
var result = mongoDates.datesToStrings({
    "firstName": "Jhon",
    "lastName": "Toto",
    "birthDate": {
      "$date": 1159747200000
    },
    "createDate": {
      "$date": 1493650389000
    }
  });