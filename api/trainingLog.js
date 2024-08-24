import TrainingLogModel from "../models/trainingLog.js";

async function addTrainingLog(body) {
  let trainingLog = new TrainingLogModel(body);

  return new Promise(async (resolve) => {
    try {
      await trainingLog.validate();
    } catch (e) {
      resolve(400);
    }

    trainingLog
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
export { addTrainingLog };
