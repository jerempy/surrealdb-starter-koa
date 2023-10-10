import Router from 'koa-router';
import { EventControllers } from '../controllers/events.controllers.js';

export const router = new Router();
router.post('/events', EventControllers.addEvent);
router.get('/events', EventControllers.getEvents);
router.get('/events/:id', EventControllers.getEventById);
router.patch('/events/:id', EventControllers.updateEventById);
router.delete('/events/:id', EventControllers.deleteEventById);

export default router;
