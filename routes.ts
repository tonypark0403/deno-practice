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
        body,
        date: new Date()
    }
    const id = await notesCollection.insertOne(note);
    console.log(id);

    note._id = id;
    ctx.response.status = 201;
    ctx.response.body = note;
}

export const getSingleNote = async (ctx: RouterContext) => {
    const id = ctx.params.id;
    const note = await notesCollection.find({ _id: { $oid: id } });
    ctx.response.body = note;
}
