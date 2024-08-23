import AnimalModel from "../models/animal.js"

function addAnimal(body) {
    let msg = new AnimalModel(body);

    msg
    .save()
    .then((doc) => {
        console.log(doc);
    })
    .catch((err) => {
        console.error(err);
    });
}

export { addAnimal };