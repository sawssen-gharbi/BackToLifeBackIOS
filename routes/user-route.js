import express from "express";
import {body} from 'express-validator';
import multerConfig from '../middlewares/multer-config.js';
import multerConfigProfile from '../middlewares/multer-config-Profile.js';

import {updateUser,deleteAll, deleteOne, getAllUsers, login, signUp,getUserByTherapy,updatePhoto,forgotPassword,editPassword,confirmation,resendConfirmation,loginGoogle,editLoginGoogle} from "../controllers/user-controller.js";
const router = express.Router();
//import upload from "../middlewares/uploads"


router.route("/signup").post(multerConfigProfile,signUp);
router.route("/login").post(login);
router.route("/getAllUsers").get(getAllUsers);
router.route("/getUserByTherapy").get(getUserByTherapy);
router.route("/loginGoogle").post(loginGoogle);
router.route("/editLoginGoogle/:id").post(multerConfigProfile,editLoginGoogle);

router.route("/deleteOne").delete(deleteOne);
router.route("/deleteAll").delete(deleteAll); //archive
router.route("/updateUser/:id").put(updateUser);
router.route("/updatePhoto").patch(multerConfig,updatePhoto);
router.route("/forgotPassword").post(forgotPassword);

router.route("/editPassword").put(editPassword);
router.route("/confirmation/:token").get(confirmation);

router.route("/resendConfirmation").post(resendConfirmation);


export default router;