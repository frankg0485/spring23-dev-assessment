import TrainingLogModel from "../models/trainingLog.js";
import AnimalModel from "../models/animal.js";

async function addTrainingLog(body) {
  let trainingLog = new TrainingLogModel(body);

  return new Promise(async (resolve) => {
    try {
      await trainingLog.validate();

      const animal = await AnimalModel.findOne({ _id: trainingLog.animal }).lean();
      if (!animal.owner.equals(trainingLog.user)) {
        throw new Error("The given Animal isn't owned by the given User!");
      }
    } catch (e) {
      console.log(e);
      resolve(400);
      return;
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

async function getTrainingLogs() {
    return new Promise(async (resolve) => {
        resolve(await TrainingLogModel.find().lean());
    });
}

export { addTrainingLog, getTrainingLogs };
