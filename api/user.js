import UserModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

async function addUser(body) {
  let user = new UserModel(body);

  return new Promise(async (resolve) => {
    try {
      await user.validate();
    } catch (e) {
      resolve(400);
    }

    bcrypt.hash(user.password, 10, function(err, hash) {
        user.password = hash;

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
  });
}

async function loginUser(body) {
    return new Promise(async (resolve) => {
        if (!(await UserModel.exists({ email: body.email }))) {
            resolve(403);
            return;
        }
        
        UserModel.findOne({ email: body.email }).lean()
        .then((targetUser) => {
            bcrypt.compare(body.password, targetUser.password)
            .then((result) => {
                resolve(result ? 200 : 403);
            })
        });
    });
}

async function verifyUser(req, res) {
    if ( (await loginUser(req.body)) != 200 ) {
        res.sendStatus(403);
    } else {
        const user = await UserModel.findOne({ email: req.body.email }).lean();
        delete user.password;
        const token = jwt.sign(user, process.env.JWT_STRING, { expiresIn: '1h' });
        res.json({ token });
    }; 
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

export { addUser, getUsers, loginUser, verifyUser };
