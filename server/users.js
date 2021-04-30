const users = [];

const addUser = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const isExistingUser = users.find((user) => {
    return user.room === room && user.name === name;
  });

  if (!name || !room) {
    return { error: 'Username and room required' };
  }
  if (isExistingUser) {
    return { error: 'Username is already taken' };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
};

const removeUser = (id) => {
  const index = users.findIndex((user) => {
    return user.id === id;
  });

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) =>
  users.find((user) => {
    return user.id === id;
  });

const getUsersInRoom = (room) =>
  users.filter((user) => {
    return user.room === room;
  });

module.exports = { addUser, removeUser, getUser, getUsersInRoom };
