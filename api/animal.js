import AnimalModel from "../models/animal.js";

async function addAnimal(user, body) {
  body.owner = user._id;
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

async function getAnimals(page) {
  return new Promise(async (resolve) => {
    const animals = await AnimalModel.find()
      .lean()
      .skip((page - 1) * 10)
      .limit(10);
    resolve({
      animals: animals,
      statusCode: 200,
    });
  });
}

export { addAnimal, getAnimals };
