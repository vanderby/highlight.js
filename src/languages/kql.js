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
    keywords:
        // Tabular operators 
        'as consume count datatable distinct evaluate extend externaldata facet find fork getschema invoke join limit lookup' +
        'make-series mv-apply mv-expand order project project-away project-rename operator project-reorder parse partition print' +
        'range reduce render sample sample-distinct search serialize sort summarize take top top-nested top-hitters union where',
    contains: 
    [
      hljs.C_LINE_COMMENT_MODE,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE
    ]
  };
}
