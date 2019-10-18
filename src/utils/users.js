// SECTION User - Storing the user data , name , score and id
const users = [];

const addUser = userName => {
  const user = { userName, score: 0 };
  users.push(user);
  console.log(user);
  return user;
};

const removeUser = () => {};

const randomPlayer = () => {
  if (Math.random() > 0.5) return users[0];
  else return users[1];
};

const getScore = () => {
  console.log(users);
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
  removeUser,
  getScore,
  updateScore,
  resetScore,
  resetAll,
  randomPlayer
};
