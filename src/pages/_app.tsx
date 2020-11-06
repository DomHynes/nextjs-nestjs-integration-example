import React from "react";
import Head from "next/head";
import { GraphQLClient, GraphQLClientProvider } from "magiql";
import GraphQLDevtools from "magiql/devtools";
import { createRecoilStore } from "magiql/store/recoil";

const client = new GraphQLClient({
  endpoint: "api/graphql",
  onDebugEvent: (event) => {
    console.log(
      `${event.operation.request.node.operation.name} => ${event.source} ${event.message}`,
      event.data
    );
  },
  useStore: createRecoilStore(),
});

export default function App({ Component, pageProps }) {
  return (
    <GraphQLClientProvider client={client}>
      <Head>
        <title>magiql: GraphQL hooks for React</title>
      </Head>
      <Component {...pageProps} />
      <GraphQLDevtools defaultTab="store" style={{ width: 800, height: 700 }} />
    </GraphQLClientProvider>
  );
}
