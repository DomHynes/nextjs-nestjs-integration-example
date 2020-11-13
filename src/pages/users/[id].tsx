import { useQuery, graphql } from "magiql";
import { NextPage } from "next";
import { useRouter } from "next/router";
import UserCard from "src/components/UserCard";
import { Id_Query } from "src/generated/Id_Query.graphql";

const query = graphql`
  query Id_Query($id: String!) {
    getUser(id: $id) {
      ...UserCard_user
    }
  }
`;

const User: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, isLoading } = useQuery<Id_Query>(query, { variables: { id } });

  if (isLoading) {
    return <p>loading</p>;
  }

  return <UserCard user={data.getUser} />;
};

export default User;
