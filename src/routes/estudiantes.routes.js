import { Router } from "express";
import { findAll, findFilter } from "../controllers/estudiantes.controller.js";


const routerEstudiantes = Router();

routerEstudiantes.get('/', findAll);

routerEstudiantes.get('/filter', findFilter);

export{
    routerEstudiantes
}