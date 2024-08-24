import AnimalModel from "../models/animal.js";

async function addAnimal(body) {
  let animal = new AnimalModel(body);

  return new Promise(async (resolve) => {
    try {
      await animal.validate();
    } catch (e) {
      resolve(400);
    }

    animal
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

export { addAnimal };
