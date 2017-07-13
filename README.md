# MongoDates
a simple way to vor a value of JSON field depending on format on its JSON Schema (specially date / datetime format for mongodb)? Examples: JSON:
```
{
  "firstName": "Alex",
  "lastName": "Alex",
  "birthDate": "1996-06-20"
```
Schema:
```
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
```
{
  "firstName": "Alex",
  "lastName": "Alex",
  "birthDate": {
    $date": 835228800000
  }
}
```
(I am using this format because I am using RestHeart)

And in case of datetime do same thing. This formating must be generic and valid for nested objects also.