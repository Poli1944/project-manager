import { html } from "@elysiajs/html";
import { Elysia } from "elysia";
import * as elements from "typed-html";
import { Basehtml } from "./components/basehtml";
import { staticPlugin } from '@elysiajs/static'


const app = new Elysia()
.use(staticPlugin())
.use(html())
.get("/", ({ html })=>{
    console.log("Conexion");
    return html(<Basehtml><h1>Hola</h1></Basehtml>);
})
.get("/users", ({ html })=>{
    console.log("Conexion");
    return html(<Basehtml><h1>Bienvenido</h1></Basehtml>);
})
.listen(80);
console.log("Servidor iniciado");