/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type pages_index_QueryVariables = {};
export type pages_index_QueryResponse = {
    readonly users: ReadonlyArray<{
        readonly id: string;
        readonly firstName: string;
    }>;
};
export type pages_index_Query = {
    readonly response: pages_index_QueryResponse;
    readonly variables: pages_index_QueryVariables;
};

/**QUERY**
query pages_index_Query {
  users {
    id
    firstName
  }
}
****/


/*
query pages_index_Query {
  users {
    id
    firstName
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "users",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "firstName",
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
    "cacheID": "fabd60821111e2e46da5bd63aea2bad3",
    "id": null,
    "metadata": {},
    "name": "pages_index_Query",
    "operationKind": "query",
    "text": "query pages_index_Query {\n  users {\n    id\n    firstName\n  }\n}\n"
  }
};
})();
(node as any).hash = 'd9f48b7937d39322e588b37dfe1010c0';
(node as any).query = "query pages_index_Query {\n  users {\n    id\n    firstName\n  }\n}\n"
export default node;
