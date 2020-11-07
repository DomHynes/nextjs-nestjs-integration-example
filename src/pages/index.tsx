import { useQuery, graphql } from "magiql";
import { pages_index_Query } from "../generated/pages_index_Query.graphql";

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
          <h2>{u.id}</h2>
        </>
      ))}
    </div>
  );
};

export default Home;
