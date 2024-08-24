import UserModel from "../models/user.js";

async function addUser(body) {
  let msg = new UserModel(body);

  return new Promise((resolve) => {
    msg
      .save()
      .then((doc) => {
        console.log(doc);
        resolve(200);
      })
      .catch((err) => {
        console.error(err);
        resolve(400);
      });
  });
}

export { addUser };
