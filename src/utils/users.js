// SECTION User - Storing the user data , name , score and id
const users = [];

const addUser = ({ userName, id }) => {
  const user = { userName, score: 0, id: id };
  users.push(user);
  console.log(user);
  return user;
};

const removeUser = id => {
  const index = users.findIndex(user => {
    return user.id === id;
  });

  if (index != -1) {
    return users.splice(index, 1)[0];
  }
  console.log(users);
};

const removeAllUser = () => {
  console.log("remove All");
  users.splice(0, users.length);
  console.log(users);
};

const randomPlayer = () => {
  if (Math.random() > 0.5) return users[0].userName;
  else return users[1].userName;
};

const getScore = () => {
  return users;
};

const updateScore = userName => {
  users.find(user => {
    if (user.userName === userName) {
      user.score = user.score + 1;
    }
  });
  console.log(users);
};

const resetScore = userName => {
  users.find(user => {
    if (user.userName === userName) {
      user.score = 0;
    }
  });
};

const resetAll = () => {
  users.find(user => {
    user.score = 0;
  });
  console.log(users);
};
module.exports = {
  addUser,
  getScore,
  updateScore,
  resetScore,
  resetAll,
  randomPlayer,
  removeAllUser,
  removeUser
};
