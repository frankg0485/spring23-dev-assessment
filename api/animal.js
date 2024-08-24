import AnimalModel from "../models/animal.js";

async function addAnimal(body) {
  let msg = new AnimalModel(body);

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

export { addAnimal };
