import TrainingLogModel from "../models/trainingLog.js";

async function addTrainingLog(body) {
  let msg = new TrainingLogModel(body);

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
export { addTrainingLog };
