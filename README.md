# MongoDates
A simple way to format a date / date-time value of JSON field depending on format on its JSON Schema.

Example: 

JSON:
```javascript
{
  "firstName": "Jhon",
  "lastName": "Toto",
  "birthDate": {
      "$date": 1159747200000
    },
    "createDate": {
      "$date": 1493650389000
    }
}
```
Schema:
```javascript
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "definitions": {},
    "id": "http://example.com/example.json",
    "properties": {
        "birthDate": {
            "id": "/properties/birthDate",
            "type": "string",
              "format":"date"
        },
         "createDate": {
            "id": "/properties/createDate",
            "type": "string",
              "format":"date-time"
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
}
```
Final result after conversion:
```javascript
{
  "firstName": "Jhon",
  "lastName": "Toto",
  "birthDate": "2006-10-03",
  "createDate": "2017-05-01T14:53:09.000Z"
}
```
(I am using this format because I am using RestHeart)

## Example1: from restheart/mongodb date format to String

```javascript
var MongoDates = require("./MongoDates.js");
// define the JSON schema
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

 console.log(result); 
 /*
 {
  "firstName": "Jhon",
  "lastName": "Toto",
  "birthDate": "2006-10-02",
  "createDate": "2017-05-01T14:53:09.000Z"
}*/
 ```
 
 ## Example2: from date/date-time String to format to restheart/mongodb date

```javascript
var MongoDates = require("./MongoDates.js");
// define the JSON schema
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
var result = mongoDates.stringsToDates({
  "firstName": "Jhon",
  "lastName": "Toto",
  "birthDate": "2006-10-02",
  "createDate": "2017-05-01T14:53:09.000Z"
});

 console.log(result); 
 /*
 {
  "firstName": "Jhon",
  "lastName": "Toto",
  "birthDate": {
    "$date": 1159747200000
  },
  "createDate": {
    "$date": 1493650389000
  }
}*/
 ```