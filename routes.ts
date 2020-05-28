import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from './mongodb.ts';

const notesCollection = db.collection('notes');

export const getNotes = async (ctx: RouterContext) => {
    const notes = await notesCollection.find();
    ctx.response.body = notes;
}