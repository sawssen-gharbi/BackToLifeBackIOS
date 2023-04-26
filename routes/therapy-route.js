import express from 'express';
import { body} from 'express-validator';
import multer from 'multer';

import { getAll, addOnce, getOnce,
 patchOnce, deleteOnce } from '../controllers/therapy-controller.js';
import multerConfig from '../middlewares/multer-config.js';

const router = express.Router();

router
.route('/')
.get(getAll)
.post (multerConfig,
    addOnce);

router
.route('/:idUser')
.get(getOnce)
.patch(patchOnce)
  router.route('/deleteOnce/:id').post(deleteOnce)

export default router;


