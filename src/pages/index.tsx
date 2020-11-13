import { useQuery, graphql } from "magiql";
import React from "react";
import { pages_index_Query } from "../generated/pages_index_Query.graphql";

import Link from "next/link";

const query = graphql`
  query pages_index_Query {
    users: getUsers {
      id
    }
  }
`;

const Home = () => {
  const { data } = useQuery<pages_index_Query>(query);

  return (
    <div>
      {data?.users?.map((u) => (
        <>
          <h2>
            <Link href={`/users/${u.id}`}>{u.id}</Link>
          </h2>
        </>
      ))}
    </div>
  );
};

export default Home;
