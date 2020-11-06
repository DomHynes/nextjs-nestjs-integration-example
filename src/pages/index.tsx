import { useQuery, graphql } from "magiql";
import { pages_index_Query } from "../generated/pages_index_Query.graphql";

const query = graphql`
  query pages_index_Query {
    users {
      id
      firstName
    }
  }
`;

const Home = () => {
  const { data } = useQuery<pages_index_Query>(query);

  return (
    <div>
      {data?.users.map((u) => (
        <>
          <h2>{u.id}</h2>
          <p>{u.firstName}</p>
        </>
      ))}
    </div>
  );
};

export default Home;
