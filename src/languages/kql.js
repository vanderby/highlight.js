/*
Language: Kusto Query Language (Azure Log Analytics/Azure Data Explorer)
Author: Nathan Vanderby <nathan.vanderby@microsoft.com>
Contributor: 
Website: https://aka.ms/kql
Category: common
*/

function(hljs) {
  return {
    aliases: ['kusto', 'kql'],
    case_insensitive: true,
    illegal: /[<>{}*]/,
    begin: '\|',
    keywords: {
      built_in:
        // Tabular operators 
        'as consume count datatable distinct evaluate extend externaldata facet find fork getschema invoke join limit lookup' +
        'make-series mv-apply mv-expand order by project project-away project-rename operator project-reorder parse partition print' +
        'range reduce render sample sample-distinct search serialize sort summarize take top top-nested top-hitters union where ' +
        // Other operators
        'evaluate make-series',
      keyword: 
        'asc by desc first from in kind last nulls of on step to with ' +
        // Scalar operators
        'and or between in has has_any has_cs hasprefix hasprefix_cs hassuffix hassuffix_cs in contains contains_cs startswith startswith_cs endswith endswith_cs matches regex',
      name:
      // TODO: Add functions here
      'ago extract tostring',
      },
    contains: 
    [
      {
        // Query Statements
        beginKeywords: 'alias database declare let pattern restrict access to set',
      },
      hljs.C_LINE_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      hljs.C_NUMBER_MODE
    ]
  };
}
