import { User } from './Chat';

interface UsersProps {
  users: User[] | undefined;
}

const Users: React.FC<UsersProps> = ({ users }) => {
  return (
    <div className="users">
      <p className="users__heading">Current Users in This Room</p>
      {users &&
        users.map((user: User, i) => {
          return (
            <div className="users__user" key={i}>
              <img src="./avatar.png" className="avatar" alt="" />
              {user.name}
            </div>
          );
        })}
    </div>
  );
};

export default Users;
