import { Sequelize } from "sequelize";

const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/casoEstudiantes');

export{
    sequelize
}