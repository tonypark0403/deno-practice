import { RouterContext } from "https://deno.land/x/oak/mod.ts";

export const getNotes = (ctx: RouterContext) => {
    ctx.response.body = 'Get notes'
}