import { graphql, useFragment } from "magiql";
import { UserCard_user } from "src/generated/UserCard_user.graphql";

const data = graphql`
  fragment UserCard_user on User {
    id
    firstName
  }
`;

const UserCard = (props: { user: UserCard_user }) => {
  const { id } = useFragment(data, props.user);

  return <div>{id}</div>;
};

export default UserCard;
