import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";


const Curso = sequelize.define('Curso', {
    codigo_curso: {
        type: DataTypes.STRING(30),
        primaryKey: true
    }, 
    fecha_inicio: {
        type: DataTypes.DATE
    }, 
    fecha_termno: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'curso',
    updatedAt: false,
    createdAt: false
});

export{
    Curso
}