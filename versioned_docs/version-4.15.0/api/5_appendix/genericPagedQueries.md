# Generic Paged Queries
## Overview
> The context object has the following general form:

```json
{
    "pagination": {},
    "searchCriteria": {},
    "sortCriteria": {}
}
```

A variety of APIs support generic paged queries.  These queries offer a very powerful mechanism for user-customized queries, with paged (i.e. cursored) results.  This describes the syntax, the output, and usage.


## Pagination

> An example of pagination:

```json
{
    "pagination": {
        "rowsPerPage": 25,
        "pageNumber": 3
    }
}
```

The pagination section identifies the rows of the result set that are to be returned by the API.  It has only two parameters.

| | |
| --- | --- |
| rowsPerPage | Identifies how many rows of information the API is to return. |
| pageNumber | Identifies the 1-based number of the page of the results to return (of the the sorted results).  For example, if the query matches 500 records, the above pagination properties would skip two pages of results (i.e. the first 50 rows) and return the third page of results (i.e. the 51st to the 75th rows).  Similarly, if there were 55 matches, only 5 results would be returned and if there were 50 or fewer matches, an empty result set would be returned. |


## Searching

> An example of searchCriteria:

```json
{
    "searchCriteria": {
        "fieldName1": "Hello world!",
        "fieldName2": 395
    }
}
```

The searchCriteria section specifies the elements of the query (analogous to the WHERE clause of an SQL query).  These criteria are specified in MongoDB syntax. Name/value pairs are specified where the name is the field name and the value is the criteria to be matched.  These criteria values can range from very simple to quite complex.

The example on the right matches on two criteria; fieldName1 must contain the exact string "Hello world!" and fieldName2 must contain the number 395.  Note that string matches are case sensitive by default.

Some regular expression pattern matching may also be used in search criteria.  The following example would match field values of Albert and Alberta but not Bertrand because of case sensitivity.

`"fieldName1": { $regex : ".*bert.*" }`

In order to make the match case insensitive, an additional MongoDB operator needs to be added to the criteria as follows.

`"fieldName1": { $regex : ".*bert.*", $options : "i" }`

Now the query would also match Bertrand.

## Sorting

> This sortCriteria example specifies sorting on two fields. The field fieldName1 is sorted ascending and the field fieldName2 is sorted descending.

```json
{
    "sortCriteria": {
        "fieldName1": 1,
        "fieldName2": -1
    }
}
```

The sortCriteria section specifies how the results are are to be sorted (much like the ORDER BY clause of an SQL query).   These criteria are specified in MongoDB syntax.  Name/value pairs are specified where the name is the field name and the value is 1 or -1 for ascending or descending, respectively.

## Output

> Output of the generic paged query APIs takes the following form (note that the context field has been condensed for better page formatting):

```json
{
    "data": {
        "results": {
            "page": 1,
            "count": 200,
            "items": [ { "item1" : 12334 } ],
            "moreBefore": false,
            "moreAfter": true
        },
        "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjoidGVzdEdsb2Jh..."
    }
}
```

The outer level of the output has two keyed elements:

- **results** - wraps all information about the query results
- **context** - contains an encoded version of the query context (it's use is described later on the page)

The results key contains the following element keys:

- **page** – identifies the 1-based page of results being returned
- **count** – the total count of items matching the search criteria
- **items** – an array of data corresponding to the queried items
- **moreBefore** – true if there are more items before the current page; false otherwise
- **moreAfter** – true if there are more items after the current page; false otherwise

The context key contains an encoded version of the current query context.

## Usage

>  The input syntax for the GetPageByOffset method

```json
{
    "context": "eyJzZWFyY2hDcml0ZXJpYSI6eyJlbnRpdHlUeXBlIjoidGVzdEdsb2Jh...",
    "pageOffset": 1
}
```

The paged query APIs generally are implemented in pairs – something of the nature of a GetPage method and a GetPageByOffset method.  The GetPage method always requires input as described above.  The GetPageByOffset method provides a simplified interface to navigate to other pages of output within the same query.

- **context** – contains the encoded context from the page from which you want to navigate
- **pageOffset** – indicates by how many pages you wish to offset from the current page (range of -n to +n)

The output form of both API methods is identical.

As previously mentioned, the field values can be supplied in terms of MongoDB syntax.  For a more comprehensive discussion see <a href="http://docs.mongodb.org/manual/reference/operator/query/" target="_blank">MongoDB</a>.

