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
    contains: [
      {
        className: 'keyword',
        begin: '|',
        keywords:
        // Tabular operators 
        'as consume count datatable distinct evaluate extend externaldata facet find fork getschema invoke join limit lookup' +
        'make-series mv-apply mv-expand order project project-away project-rename operator project-reorder parse partition print' +
        'range reduce render sample sample-distinct search serialize sort summarize take top top-nested top-hitters union where',
        contains: [
          {
            className: 'string',
            begin: '\'', end: '\'',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '\'\''}]
          },
          {
            className: 'string',
            begin: '"', end: '"',
            contains: [hljs.BACKSLASH_ESCAPE, {begin: '""'}]
          },
          {
            className: 'string',
            begin: '`', end: '`',
            contains: [hljs.BACKSLASH_ESCAPE]
          },
          hljs.C_NUMBER_MODE,
          hljs.C_BLOCK_COMMENT_MODE,
          hljs.HASH_COMMENT_MODE
        ]
      },
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.HASH_COMMENT_MODE
    ]
  };
}
