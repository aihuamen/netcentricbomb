// SECTION User - Storing the user data , name , score and id
const users = [];

const addUser = userName => {
  const user = { userName, score: 0 };
  users.push(user);
  console.log(user);
  return user;
};

const removeUser = () => {};

const getScore = (userName1, userName2) => {
  const score1 = 0;
  const score2 = 0;
  users.find(user => {
    if (user.userName === userName1) {
      score1 = user.score;
    }
    if (user.userName === userName2) {
      score2 = user.score;
    }
  });
  console.log({ score1, score2 });
  return { score1, score2 };
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
  resetAll
};
