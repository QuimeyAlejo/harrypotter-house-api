import { DataTypes } from "sequelize";
import { sequelize } from "../db.js";

export const Character = sequelize.define(
    "character",
    { 
        id: {
            type: DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          lastName: {
            type: DataTypes.STRING,
          },
        house: {
            type: DataTypes.STRING,
            allowNull: false,
        }  
    } ,{ timestamps: false }
)