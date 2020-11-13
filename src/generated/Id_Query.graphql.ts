/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Id_QueryVariables = {
    id: string;
};
export type Id_QueryResponse = {
    readonly getUser: {
        readonly " $fragmentRefs": FragmentRefs<"UserCard_user">;
    };
};
export type Id_Query = {
    readonly response: Id_QueryResponse;
    readonly variables: Id_QueryVariables;
};

/**QUERY**
query Id_Query(
  $id: String!
) {
  getUser(id: $id) {
    id
    firstName
  }
}
****/


/*
query Id_Query(
  $id: String!
) {
  getUser(id: $id) {
    ...UserCard_user
  }
}

fragment UserCard_user on User {
  id
  firstName
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Id_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUser",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "UserCard_user"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "Id_Query",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "getUser",
        "plural": false,
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
    ]
  },
  "params": {
    "cacheID": "5a59190a6d56ece99845486c454af7cc",
    "id": null,
    "metadata": {},
    "name": "Id_Query",
    "operationKind": "query",
    "text": "query Id_Query(\n  $id: String!\n) {\n  getUser(id: $id) {\n    ...UserCard_user\n  }\n}\n\nfragment UserCard_user on User {\n  id\n  firstName\n}\n"
  }
};
})();
(node as any).hash = '4462c680d9aa9a48c88f5b6c8c333d0a';
(node as any).query = "query Id_Query(\n  $id: String!\n) {\n  getUser(id: $id) {\n    id\n    firstName\n  }\n}\n"
export default node;
