import UserModel from "../models/user.js";

async function addUser(body) {
  let user = new UserModel(body);

  return new Promise(async (resolve) => {
    try {
      await user.validate();
    } catch (e) {
      resolve(400);
    }

    user
      .save()
      .then((doc) => {
        console.log(doc);
        resolve(200);
      })
      .catch((err) => {
        console.error(err);
        resolve(500);
      });
  });
}

async function getUsers(page) {
    return new Promise(async (resolve) => {
        const users = await UserModel.find().lean().skip((page - 1) * 10).limit(10);
        users.forEach(user => {
            delete user.password;
        });
        resolve({
            users: users,
            statusCode: 200
        });
    });
}

export { addUser, getUsers };
