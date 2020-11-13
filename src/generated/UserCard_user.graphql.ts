/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UserCard_user$data = {
    readonly id: string;
    readonly firstName: string | null;
    readonly " $refType": "UserCard_user";
};
export type UserCard_user = {
    readonly " $data"?: UserCard_user$data;
    readonly " $fragmentRefs": FragmentRefs<"UserCard_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "UserCard_user",
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
  "type": "User",
  "abstractKey": null
};
(node as any).hash = 'f6cfe623f79d89929f82af7a12b24e20';

export default node;
