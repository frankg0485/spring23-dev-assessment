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

export { addUser };
