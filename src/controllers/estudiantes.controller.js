import { request, response } from "express";
import { Estudiante } from "../models/estudiantes.js";
import { Curso } from "../models/cursos.js";

const findAll = async (req = request, res = response) => {
    try {
        const estudiantes = await Estudiante.findAll({
            include: Curso
        });
        res.json({
            msg: 'funcionando findall',
            estudiantes
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        });
    }
}

const findFilter = async (req = request, res = response) => {
    const { idEstudiante } = req.body;
    try {
        const estudiantesFiltrados = await Estudiante.findAll({
            where: {
                'id_estudiante': idEstudiante
            }
        });
        res.json({
            msg: 'funcionando finfilter',
            estudiantesFiltrados
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: 'Contacte al administrador'
        });
    }
}

export {
    findAll,
    findFilter
}