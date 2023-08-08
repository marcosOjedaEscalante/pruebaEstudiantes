import { request, response } from "express";
import { Estudiante } from "../models/estudiantes.js";
import { Curso } from "../models/cursos.js";
import { Op } from "sequelize";

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
    const { fecha_inicio_start = '1900-01-01', fecha_inicio_end = '2100-12-31', ...datos } = req.body;
    const keys = Object.keys(datos);
    const values = Object.values(datos);
    const criteriosEstudiantes = {

    }
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== null && values[i] !== undefined && values[i] !== '') {
            criteriosEstudiantes[keys[i]] = values[i];
        }
    }
    try {
        const estudiantesFiltrados = await Estudiante.findAll({
            include: [{
                model: Curso,
                where: {
                    fecha_inicio: {
                        [Op.between]: [fecha_inicio_start, fecha_inicio_end]
                    }
                }
            }],
            where: criteriosEstudiantes
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