import { RouterContext } from "https://deno.land/x/oak/mod.ts";
import db from './mongodb.ts';

const notesCollection = db.collection('notes');

export const getNotes = async (ctx: RouterContext) => {
    const notes = await notesCollection.find();
    ctx.response.body = notes;
}

export const createNote = async (ctx: RouterContext) => {
    const { value: { title, body } } = await ctx.request.body();
    // console.log(body);
    const note: any = {
        title,
        body
    }
    const id = await notesCollection.insertOne(note);
    console.log(id);

    note._id = id;
    ctx.response.status = 201;
    ctx.response.body = note;
}