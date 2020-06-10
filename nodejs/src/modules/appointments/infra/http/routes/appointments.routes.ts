import { Router } from 'express';

import ensureAuthenticated from '@modules/users/infra/http/middlewares/ensureAuthenticated';
import AppointmentsController from '../controllers/AppointmentsController';
//import Appointment from '../../typeorm/entities/Appointment';

const appointmentsRouter = Router();
const appointmentsController = new AppointmentsController();

appointmentsRouter.use(ensureAuthenticated);

//appointmentsRouter.get('/', async (req, res) => {
//  const appointment = await appointmentsRepository.find();

  //console.log(appointment);
//  return res.json(appointment);
//});

appointmentsRouter.post('/', appointmentsController.create);

export default appointmentsRouter;
