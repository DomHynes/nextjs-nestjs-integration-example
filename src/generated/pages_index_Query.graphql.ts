/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type pages_index_QueryVariables = {};
export type pages_index_QueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string;
    }>;
};
export type pages_index_Query = {
    readonly response: pages_index_QueryResponse;
    readonly variables: pages_index_QueryVariables;
};

/**QUERY**
query pages_index_Query {
  users: getUsers {
    id
  }
}
****/


/*
query pages_index_Query {
  users: getUsers {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": "users",
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "getUsers",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_index_Query",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_index_Query",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "576170f7bc0564f841cc7750f7a763ef",
    "id": null,
    "metadata": {},
    "name": "pages_index_Query",
    "operationKind": "query",
    "text": "query pages_index_Query {\n  users: getUsers {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '658ffad6875c641cb3addd053195523e';
(node as any).query = "query pages_index_Query {\n  users: getUsers {\n    id\n  }\n}\n"
export default node;
