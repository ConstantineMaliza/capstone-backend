import express from 'express';

const routes = express.Router();

import {signup,allsignupuser} from '../controllers/signup_controllers';
import {validateName} from '../middlewares/validation';

routes.post('/signup',validateName, signup);
routes.get('/allsignupuser', allsignupuser);

export  default routes;