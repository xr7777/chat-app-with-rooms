interface UsersProps {
  users:
    | {
        id: string;
        name: string;
        room: string;
      }[]
    | undefined;
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="users">
      <p className="users__heading">Current Users in This Room</p>
      {users &&
        users.map((user: any, i) => {
          return (
            <div className="users__user" key={i}>
              <img src="./onlineIcon.png" alt="" />
              {user.name}
            </div>
          );
        })}
    </div>
  );
};

export default Users;
