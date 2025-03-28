import { DataTypes } from "sequelize";
import sequelize  from "../config/db.js";

const Hotel = sequelize.define("Hotel",{
    Hotel_ID: {Type: DataRypes.INTEGER, primarykey:true, AutoIncrement: true},
    NumberOfRooms: {Type: DataRypes.INTEGER, allowNull: false},
    Address: {Type: DataRypes.STRING, allowNull: false},
    EmailAddresses: {Type: DataRypes.STRING, allowNull: false},
    PhoneNumber: {Type: DataRypes.INTEGER, allowNull: false},

})

export default Hotel;