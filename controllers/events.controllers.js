import { db } from '../db/index.js';
import { ensureTable } from '../helpers/index.js';

const getEvents = async (ctx) => {
    const events = await db.select('event');
    ctx.body = {
        data: events,
    };
    ctx.status = 200;
};

const getEventById = async (ctx) => {
    const { id } = ctx.params;
    const eventId = ensureTable('event', id);
    const [event] = await db.select(eventId);
    ctx.body = {
        data: event,
    };
    ctx.status = 200;
};

const addEvent = async (ctx) => {
    const [event] = await db.create('event', ctx.request.body);
    ctx.body = {
        data: { id: event.id },
    };
    ctx.status = 201;
};

const updateEventById = async (ctx) => {
    const { id } = ctx.params;
    const eventId = ensureTable('event', id);
    const [event] = await db.merge(eventId, ctx.request.body);
    ctx.body = {
        data: event,
    };
    ctx.status = 200;
};

const deleteEventById = async (ctx) => {
    const { id } = ctx.params;
    const eventId = ensureTable('event', id);
    await db.delete(eventId);
    ctx.status = 204;
};

export const EventControllers = {
    addEvent,
    getEventById,
    getEvents,
    deleteEventById,
    updateEventById,
};
