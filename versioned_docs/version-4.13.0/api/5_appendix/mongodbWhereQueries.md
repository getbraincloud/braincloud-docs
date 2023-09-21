# MongoDB Where Queries
## Overview
Some <%= data.branding.productName %> APIs take a JSON formatted MongoDB-style where clause as a parameter.  These allow you to perform more complex queries on data to get specific results.

Depending on the service different default (<%= data.branding.productName %> created) fields are allowed to be queried on (see the documentation for these services for a list of allowed fields).

You can also query any custom data you have created using Dot notation. For example:

`{ "data.myObjectField.name": "example" }`

Here are several examples using the Entity service.  For a complete list of syntax refer to the MongoDB documentation <a href="https://docs.mongodb.com/v2.4/reference/operator/query/" target="_blank">here</a>.


## Basics

### Equality

Equality is the simplest form of query and will return only data that exactly matches the criteria.

`{ "entityType": "example" }`

This string will return only entities of type example.

You can also specify multiple criteria for the equality parameters.

`{ "entityType": { "$in": [ "food", "snacks" ] } }`

This string will return any entities of type food or snacks.  Although you can express this query using the $or operator, use the $in operator rather than the $or operator when performing equality checks on the same field.

*Note that there is also a **$nin** operator that is functionally the opposite of **$in**.*


### Comparison

The following comparison operators are supported:

Name | Description
-----| -----------
$ne | Not equal to
$gt | Greater than
$gte | Greater than or equal to
$lt | Less than
$lte | Less than or equal to

The following example returns all items whose price is greater than 1.99.

`{ "data.price": { "$gt": 1.99 } }`


## Logical Operators

### AND

A compound query can specify conditions for more than one field in the data. Implicitly, a logical AND conjunction connects the clauses of a compound query so that the query selects the data in the collection that match all the conditions.

```
{ 
  "entityType": "example", 
  "data.rank": { "$lt": 9000 } 
}
```

This query returns all entities where the entityType field has the value 'example' and the value of the rank field is less than 9000.

For nested conditions, you can also specify an explicit `$and` clause. For example:

```
{ 
  "$and": [ 
    { "data.localTimezone": { "$gte": 5 } }, 
    { "data.localTimezone": { "$lte": 8 } } 
  ] 
}
```


### OR

Using the $or operator, you can specify a compound query that joins each clause with a logical OR conjunction so that the query selects the data in the collection that match at least one condition.

```
{ 
  "$or": [ 
    { "data.rank": { "$gt": 100 } }, 
    { "data.rank": { "$lt": 10 } } 
  ] 
}
```

*Note that there is also an **$nor** operator that is functionally the opposite of $or.*


### NOT

Performs a logical NOT operation on the expression, and returns the entities that do *not* match.

`{ "data.price": { "$not": { "$gt": 1.99 } } }`

The following example returns all items whose price is greater than 1.99.


## Arrays

When the field holds an array, you can query for an exact array match or for specific values in the array. If the array holds embedded objects, you can query for specific fields in the embedded objects using dot notation.

### Exact Match

The following example queries for all entities where the field ratings is an array that holds exactly three elements, 5, 8, and 9, in this order:

`{ "data.ratings": [ 5, 8, 9 ] }`

### Match a single element

This example will return all entities with an array called ratings that contain the element 'Awesome'.

`{ "data.ratings": "Awesome" }`


### Match a single element against multiple criteria

Use $elemMatch operator to specify multiple criteria on the elements of an array such that at least one array element satisfies all the specified criteria.

The following example queries for documents where the ratings array contains at least one element that is greater than ($gt) 5 and less than ($lt) 9:

`{ "data.ratings": { "$elemMatch": { "$gt": 2, "$lt": 9 } } }`


## Types

You can do lookups based on whether a field is of a certain type.

The types used are BSON types (documentation <a href="https://docs.mongodb.org/manual/reference/bson-types/" target="_blank">here</a>).

For example this query will only return entites where the field 'test' is of type 'null' (BSON type 10):

`{ "data.test": { "$type": 10 } }`


## Null or Missing Fields

You can also do lookups based on null or whether a field exists.

### Null

Given the following query:

`{ "data.ratings": null }`

Any entity that contains the field 'ratings' with the value 'null' *OR* any entity that does not contain the field 'ratings' will be returned.

### Exists

Given the following query:

`{ "data.ratings": { "$exists": false } }`

Any entity that contains the field 'ratings' with the value 'null' *OR* any entity that does not contain the field 'ratings' will be returned.
